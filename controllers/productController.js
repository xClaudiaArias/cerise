const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc get all Product
// @route GET /Product
// @access Private

const getAllProducts = asyncHandler(async (req, res) => {

})

// @desc create newall Product
// @route POST /Product
// @access Private

const createNewProduct = asyncHandler(async (req, res) => {

})

// @desc updateProduct
// @route PATCH /Product
// @access Private

const updateProduct = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Product
// @route POST /Product
// @access Private

const deleteProduct = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct
}