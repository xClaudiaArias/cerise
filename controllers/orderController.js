const Order = require('../models/Order')
const Billing = require('../models/Billing')
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
    const { customer, products, date, total } = req.body

    if (!customer || !Array.isArray(products) || !products.length || !date || !total) {
        return res.status(400).json({message: "All fields are required"})
    }

    // check for duplicates 
    const duplicate = await Order.findOne({ customer }).lean().exec()

    if (duplicate) {
        return res.status(409).json({message: 'Duplicate customer'})
    }

    const orderObject = {customer, products, date, total }

    const order = await Order.create(orderObject)

    if(order) {
        res.status(201).json({message: `customer ${customer} has a new order ${order}`})
    } else {
        res.status(400).json({message: 'Invalid order data received'})
    }

})

// @desc updateOrders
// @route PATCH /Orders
// @access Private

const updateOrder = asyncHandler(async (req, res) => {
    const { id, customer, products, date, total } = req.body

    // confirm data
    if (!id || !customer || !date || !Array.isArray(products) || !products.length) {
        return res.status(400).json({message: "All fields are required"})
    }

    const order = await Order.findById(id).exec()

    if(!order) {
        return res.status(400).json({message: "Order Not Found"})
    }

    const duplicate = await User.findOne({ id }).lean().exec()

    // Allow update to original user
    if(duplicate?._id.toString() !== id) {
        return res.status(409).json({message: "Duplicate customer"})
    }

    order.customer = customer
    order.products = products
    order.date = date
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

    // Confirm note exists to delete 
    const order = await Order.findById(id).exec()

    if (!order) {
        return res.status(400).json({ message: 'Order not found' })
    }

    const result = await Order.deleteOne()

    const reply = `Order '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllOrders,
    createNewOrder,
    updateOrder,
    deleteOrder
}