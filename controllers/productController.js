const Product = require('../models/Product')
const Category = require('../models/Category')
const asyncHandler = require('express-async-handler')


// @desc get all Product
// @route GET /Product
// @access Private

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().lean()

    if(!products.length) {
        return res.status(400).json({message: "No products found"})
    }

    const productWithCategory = await Promise.all(products.map(async (product) => {
        const category = await Category.findById(product.category).lean().exec()
        return { ...product, categoryName: category.categoryName }
    }))


    res.json(productWithCategory)


})

// @desc create newall Product
// @route POST /Product
// @access Private

const createNewProduct = asyncHandler(async (req, res) => {
    const { category, productName, color, units_in_stock, size, price } = req.body

    // confirm data 
    if (!productName || !color || !units_in_stock || !size || !price ) {
        return res.status(400).json({message: "All fields are required"})
    }

    const productObject = { category, productName, color, units_in_stock, size, price }
    const product = await Product.create(productObject)



    if (product) {
        res.status(201).json({message: `New Product ${product.productName} created`})
    } else {
        res.status(400).json({message: "Invalid product data received"})
    }
})

// @desc updateProduct
// @route PATCH /Product
// @access Private

const updateProduct = asyncHandler(async (req, res) => {
    const { id, category, productName, color, units_in_stock, size, price, in_stock } = req.body

    // confirm data
    if (!id || !category || !productName || !color || !units_in_stock || !price || !Array.isArray(size) || !size.length || typeof in_stock !== 'boolean') {
        return res.status(400).json({message: "All fields are required"})
    }

    const product = await Product.findById(id).exec()

    if(!product) {
        return res.status(400).json({message: "Product Not Found"})
    }

    product.category = category
    product.productName = productName
    product.color = color
    product.units_in_stock = units_in_stock
    product.price = price
    product.size = size 
    product.in_stock = in_stock 

    const updatedProduct = await product.save()

    res.json({message: `${updatedProduct.productName} updated`})
})

// @desc PATCH Product
// @route POST /Product
// @access Private

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'product ID required' })
    }

    const product = await Product.findById(id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Note not found' })
    }

    const result = await product.deleteOne()

    const reply = `Product '${result.productName}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct
}