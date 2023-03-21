const Payment = require('../models/Payment')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc get all Payments
// @route GET /Payments
// @access Private

const getAllPayments = asyncHandler(async (req, res) => {

})

// @desc create newall Payments
// @route POST /Payments
// @access Private

const createNewPayment = asyncHandler(async (req, res) => {

})

// @desc updatePayments
// @route PATCH /Payments
// @access Private

const updatePayment = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Payments
// @route POST /Payments
// @access Private

const deletePayment = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllPayments,
    createNewPayment,
    updatePayment,
    deletePayment
}