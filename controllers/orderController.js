const Order = require('../models/Order')
const asyncHandler = require('express-async-handler')


// @desc get all Orders
// @route GET /Orders
// @access Private

const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find().lean()

    if(!orders?.length) {
        return res.status(400).json({message: "No orders found"})
    }

    res.json(orders)
})

// @desc create newall Orders
// @route POST /Orders
// @access Private

const createNewOrder = asyncHandler(async (req, res) => {
    const { customer, products, total } = req.body

    // Confirm data
    if ( !customer || !Array.isArray(products) || !products.length || !total) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate customer
    const duplicate = await Order.findOne({ customer }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate customer title' })
    }

    // Create and store the new user 
    const order = await Order.create({ customer, products, total })

    if (order) { // Created 
        return res.status(201).json({ message: 'New Order created' })
    } else {
        return res.status(400).json({ message: 'Invalid note data received' })
    }
})

// @desc updateOrders
// @route PATCH /Orders
// @access Private

const updateOrder = asyncHandler(async (req, res) => {
    const { id, customer, products, total } = req.body

    // confirm data
    if (!id || !customer || !Array.isArray(products) || !products.length) {
        return res.status(400).json({message: "All fields are required"})
    }

    const order = await Order.findById(id).exec()

    if(!order) {
        return res.status(400).json({message: "Order Not Found"})
    }

    order.customer = customer
    order.products = products
    order.total = total


    const updatedOrder = await order.save()

    res.json({message: `Order was updated`})
})

// @desc PATCH Orders
// @route POST /Orders
// @access Private

const deleteOrder = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Order ID required' })
    }
    
    const order = await Order.findById(id).exec()

    if (!order) {
        return res.status(400).json({ message: 'Order not found' })
    }

    const result = await Order.deleteOne()

    const reply = `Order deleted`

    res.json(reply)
})

module.exports = {
    getAllOrders,
    createNewOrder,
    updateOrder,
    deleteOrder
}