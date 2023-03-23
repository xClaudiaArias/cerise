const Billing = require('../models/Billing')
const asyncHandler = require('express-async-handler')

// @desc get all Billings
// @route GET /Billings
// @access Private

const getAllBillings = asyncHandler(async (req, res) => {
    const billings = await Billing.find().lean()

    if(!billings?.length) {
        return res.status(400).json({message: "No billings found"})
    }

    res.json(billings)

})

// @desc create newall Billings
// @route POST /Billings
// @access Private

const createNewBilling = asyncHandler(async (req, res) => {
    const { order, street, street2, city, state, zipcode } = req.body

    if ( !order || !street || !street2 || !city || !state || !zipcode ) {
        return res.status(400).json({message: "All fields are required."})
    }

    const billingObject = { order, street, street2, city, state, zipcode }

    const billing = await Billing.create(billingObject)

    if (billing) {
        res.status(201).json({message: `New billing created`})
    } else {
        res.status(400).json({message: "Invalid billing data received"})
    }

})

// @desc updateBillings
// @route PATCH /Billings
// @access Private

const updateBilling = asyncHandler(async (req, res) => {
    const { id, order, street, street2, city, state, zipcode, hasShipped } = req.body

    if( !id || !order || !street || !street2 || !city || !state || !zipcode || typeof hasShipped !== 'boolean') {
        return res.status(400).json({message: "All fields are required"})
    }

    const billing = await Billing.findById(id).exec()

    if (!billing) {
        return res.status(400).json({message: "Billing address not found"})
    }

    billing.street = street
    billing.street2 = street2
    billing.city = city
    billing.state = state
    billing.zipcode = zipcode
    billing.hasShipped = hasShipped

    const updatedBilling = await billing.save()

    res.json(`'${updatedBilling.id}' updated`)
})

// @desc PATCH Billings
// @route POST /Billings
// @access Private

const deleteBilling = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'billing ID required' })
    }

    // Confirm note exists to delete 
    const billing = await Billing.findById(id).exec()

    if (!billing) {
        return res.status(400).json({ message: 'Billing id not found' })
    }

    const result = await billing.deleteOne()

    const reply = `Billing '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllBillings,
    createNewBilling,
    updateBilling,
    deleteBilling
}