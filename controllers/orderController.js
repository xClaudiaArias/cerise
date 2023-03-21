const Order = require('../models/Order')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc get all Orders
// @route GET /Orders
// @access Private

const getAllOrders = asyncHandler(async (req, res) => {

})

// @desc create newall Orders
// @route POST /Orders
// @access Private

const createNewOrder = asyncHandler(async (req, res) => {

})

// @desc updateOrders
// @route PATCH /Orders
// @access Private

const updateOrder = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Orders
// @route POST /Orders
// @access Private

const deleteOrder = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllOrders,
    createNewOrder,
    updateOrder,
    deleteOrder
}