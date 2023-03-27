const Card = require('../models/Card')
const asyncHandler = require('express-async-handler')

// @desc get all Cards
// @route GET /Cards
// @access Private

const getAllCards = asyncHandler(async (req, res) => {
    const cards = await Card.find().lean()

    if(!cards.length) {
        return res.status(400).json({message: "No card found"})
    }

    res.json(cards)
})

// @desc create newall Cards
// @route POST /Cards
// @access Private

const createNewCard = asyncHandler(async (req, res) => {
    const { customer, holderName, cardNum, cvv, exp_date } = req.body

    if (!customer || !holderName || !cardNum || !cvv || !exp_date) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const cardObject = {  customer, holderName, cardNum, cvv, exp_date  }


    const card = await Card.create(cardObject)


    if(card) {
        res.status(201).json({message: `new card was created`})
    } else {
        res.status(400).json({message: 'Invalid order data received'})
    }

})

// @desc updateCards
// @route PATCH /Cards
// @access Private

const updateCard = asyncHandler(async (req, res) => {
    const {id, customer, holderName, cardNum, cvv, exp_date, processed } = req.body

    // Confirm data
    if (!id || !customer || !holderName || !cardNum || !cvv || !exp_date || !processed || typeof processed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm card exists
    const card = await Card.findById(id).exec()

    if (!card) {
        return res.status(400).json({ message: 'Card not found' })
    }

    card.customer = customer
    card.holderName = holderName
    card.cardNum = cardNum
    card.cvv = cvv
    card.exp_date = exp_date
    card.processed = processed

    const updatedCard = await card.save()

    res.json(`${updatedCard.holderName}'s updated`)
})

// @desc PATCH Cards
// @route POST /Cards
// @access Private

const deleteCard = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Card ID required' })
    }

    const card = await Card.findById(id).exec()

    if (!card) {
        return res.status(400).json({ message: 'Card not found' })
    }

    const result = await card.deleteOne()

    const reply = `${result.holderName}'s card with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllCards,
    createNewCard,
    updateCard,
    deleteCard
}