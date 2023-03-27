const Category = require('../models/Category')
const asyncHandler = require('express-async-handler')

// @desc get all Categorys
// @route GET /Categorys
// @access Private

const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find().lean()

    if(!categories?.length) {
        return res.status(400).json({message: "No categories found"})
    }

    res.json(categories)
})

// @desc create newall Categorys
// @route POST /Categorys
// @access Private

const createNewCategory = asyncHandler(async (req, res) => {
    const { products, categoryName } = req.body

    if (!categoryName) {
        return res.status(400).json({message: "All fields are required"})
    }

    const duplicate = await Category.findOne({ categoryName }).lean().exec()

    if (duplicate) {
        return res.status(409).json({message: 'Category already exists'})
    }

    const categoryObject = { products, categoryName }


    const category = await Category.create(categoryObject)

    if(category) {
        res.status(201).json({message: `new category: ${categoryName} was created`})
    } else {
        res.status(400).json({message: 'Invalid order data received'})
    }

})

// @desc updateCategorys
// @route PATCH /Categorys
// @access Private

const updateCategory = asyncHandler(async (req, res) => {
    const { id, products, categoryName } = req.body

    // Confirm data
    if (!categoryName) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm category exists to update
    const category = await Category.findById(id).exec()

    if (!category) {
        return res.status(400).json({ message: 'Category not found' })
    }

    // Check for duplicate title
    const duplicate = await Category.findOne({ categoryName }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate categoryName' })
    }

    category.products = products
    category.categoryName = categoryName

    const updatedCategory = await category.save()

    res.json(`Category updated`)
})

// @desc PATCH Categorys
// @route POST /Categorys
// @access Private

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.body
    
    if (!id) {
        return res.status(400).json({message: "Category id is required"})
    }

    // add any relationship here 

    // .....

    // define category
    const category = await Category.findById(id).exec()

    if (!category) {
        return res.status(400).json({message: "Category not found"})
    } 

    const deletedCategory = await category.deleteOne()

    const response = `Category: ${deletedCategory.categoryName} with ID ${deletedCategory.id} deleted`

    res.json(response)
})

module.exports = {
    getAllCategories,
    createNewCategory,
    updateCategory,
    deleteCategory
}