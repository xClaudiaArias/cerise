const express = require('express');
const router = express.Router()
const orderController = require('../controllers/orderController')

router.route('/')
    .get(orderController.getAllOrders) // read
    .post(orderController.createNewOrder) // create
    .patch(orderController.updateOrder) // update
    .delete(orderController.deleteOrder) // delete

module.exports = router