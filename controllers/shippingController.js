const Shipping = require('../models/shipping')
const asyncHandler = require('express-async-handler')

// @desc get all shippings
// @route GET /shippings
// @access Private

const getAllShippings = asyncHandler(async (req, res) => {
    const shippings = await Shipping.find().lean()

    if(!shippings?.length) {
        return res.status(400).json({message: "No shippings found"})
    }

    res.json(shippings)

})

// @desc create newall shippings
// @route POST /shippings
// @access Private

const createNewShipping = asyncHandler(async (req, res) => {
    const { order, street, street2, city, state, zipcode } = req.body

    if ( !order || !street || !street2 || !city || !state || !zipcode ) {
        return res.status(400).json({message: "All fields are required."})
    }

    const shippingObject = { order, street, street2, city, state, zipcode }

    const shipping = await Shipping.create(shippingObject)

    if (shipping) {
        res.status(201).json({message: `New shipping created`})
    } else {
        res.status(400).json({message: "Invalid shipping data received"})
    }

})

// @desc updateshippings
// @route PATCH /shippings
// @access Private

const updateShipping = asyncHandler(async (req, res) => {
    const { id, order, street, street2, city, state, zipcode, hasShipped } = req.body

    if( !id || !order || !street || !street2 || !city || !state || !zipcode ) {
        return res.status(400).json({message: "All fields are required"})
    }

    const shipping = await Shipping.findById(id).exec()

    if (!shipping) {
        return res.status(400).json({message: "shipping address not found"})
    }

    shipping.street = street
    shipping.street2 = street2
    shipping.city = city
    shipping.state = state
    shipping.zipcode = zipcode

    const updatedShipping = await Shipping.save()

    res.json(`'${updatedShipping.id}' updated`)
})

// @desc PATCH shippings
// @route POST /shippings
// @access Private

const deleteShipping = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'shipping ID required' })
    }

    // Confirm note exists to delete 
    const shipping = await Shipping.findById(id).exec()

    if (!shipping) {
        return res.status(400).json({ message: 'shipping id not found' })
    }

    const result = await Shipping.deleteOne()

    const reply = `shipping deleted`

    res.json(reply)
})

module.exports = {
    getAllShippings,
    createNewShipping,
    updateShipping,
    deleteShipping
}