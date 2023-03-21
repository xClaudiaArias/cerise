const express = require('express');
const router = express.Router()
const productController = require('../controllers/productController')

router.route('/')
    .get(productController.getAllProducts) // read
    .post(productController.createNewProduct) // create
    .patch(productController.updateProduct) // update
    .delete(productController.deleteProduct) // delete

module.exports = router