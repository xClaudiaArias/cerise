const express = require('express');
const router = express.Router()
const registerController = require('../controllers/customerController')

router.route('/')
    .get(registerController.getAllCustomers) // read
    .post(registerController.createNewCustomer) 

module.exports = router
