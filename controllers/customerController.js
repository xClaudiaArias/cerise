const Customer = require('../models/Customer')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc get all customers
// @route GET /customers
// @access Private

const getAllCustomers = asyncHandler(async (req, res) => {

})

// @desc create newall customers
// @route POST /customers
// @access Private

const createNewCustomer = asyncHandler(async (req, res) => {

})

// @desc updatecustomers
// @route PATCH /customers
// @access Private

const updateCustomer = asyncHandler(async (req, res) => {
    
})

// @desc PATCH customers
// @route POST /customers
// @access Private

const deleteCustomer = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllCustomers,
    createNewCustomer,
    updateCustomer,
    deleteCustomer
}