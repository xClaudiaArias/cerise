const Shipping = require('../models/Shipping')
const asyncHandler = require('express-async-handler')

// @desc get all Shippings
// @route GET /Shippings
// @access Private

const getAllShippings = asyncHandler(async (req, res) => {

})

// @desc create newall Shippings
// @route POST /Shippings
// @access Private

const createNewShipping = asyncHandler(async (req, res) => {

})

// @desc updateShippings
// @route PATCH /Shippings
// @access Private

const updateShipping = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Shippings
// @route POST /Shippings
// @access Private

const deleteShipping = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllShippings,
    createNewShipping,
    updateShipping,
    deleteShipping
}