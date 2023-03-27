const Payment = require('../models/Payment')
const asyncHandler = require('express-async-handler')

// @desc get all Payments
// @route GET /Payments
// @access Private

const getAllPayments = asyncHandler(async (req, res) => {
    const payments = await Payment.find().lean()

    if(!payments.length){
        return res.status(400).json({message: "No Payments Found"})
    }

    res.json(payments)
})

// @desc create newall Payments
// @route POST /Payments
// @access Private

const createNewPayment = asyncHandler(async (req, res) => {
    const {order, card} = req.body

    if (!order || !card) {
        return res.status(400).json({message: "All fields are required"})
    }

    const paymentObject = { order, card }

    const payment = await Payment.create(paymentObject)

    if (payment) {
        res.status(201).json({message: "New Payment added"})
    } else {
        res.status(400).json({message: "Invalid payment data"})
    }
})

// @desc updatePayments
// @route PATCH /Payments
// @access Private

const updatePayment = asyncHandler(async (req, res) => {
    const {id, order, card, processed } = req.body

    // Confirm data
    if (!id, !order || !card || typeof processed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm note exists to update
    const payment = await Payment.findById(id).exec()

    if (!payment) {
        return res.status(400).json({ message: 'Payment not found' })
    }

    payment.order = order
    payment.card = card
    payment.processed = processed

    const updatedNote = await payment.save()

    res.json(`Payment updated`)
})

// @desc PATCH Payments
// @route POST /Payments
// @access Private

const deletePayment = asyncHandler(async (req, res) => {
    const { id } = req.body
    
    if (!id) {
        return res.status(400).json({message: "Payment id is required"})
    }

    const payment = await Payment.findById(id).exec()

    if (!payment) {
        return res.status(400).json({message: "Payment not found"})
    } 

    const deletedPayment = await payment.deleteOne()

    const response = `Payment deleted`

    res.json(response)
})

module.exports = {
    getAllPayments,
    createNewPayment,
    updatePayment,
    deletePayment
}