const Category = require('../models/Category')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc get all Categorys
// @route GET /Categorys
// @access Private

const getAllCategories = asyncHandler(async (req, res) => {

})

// @desc create newall Categorys
// @route POST /Categorys
// @access Private

const createNewCategory = asyncHandler(async (req, res) => {

})

// @desc updateCategorys
// @route PATCH /Categorys
// @access Private

const updateCategory = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Categorys
// @route POST /Categorys
// @access Private

const deleteCategory = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllCategories,
    createNewCategory,
    updateCategory,
    deleteCategory
}