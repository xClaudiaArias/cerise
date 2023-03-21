const Billing = require('../models/Billing')
const asyncHandler = require('express-async-handler')

// @desc get all Billings
// @route GET /Billings
// @access Private

const getAllBillings = asyncHandler(async (req, res) => {

})

// @desc create newall Billings
// @route POST /Billings
// @access Private

const createNewBilling = asyncHandler(async (req, res) => {

})

// @desc updateBillings
// @route PATCH /Billings
// @access Private

const updateBilling = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Billings
// @route POST /Billings
// @access Private

const deleteBilling = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllBillings,
    createNewBilling,
    updateBilling,
    deleteBilling
}