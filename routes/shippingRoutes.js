const express = require('express');
const router = express.Router()
const shippingController = require('../controllers/shippingController')

router.route('/')
    .get(shippingController.getAllShippings) // read
    .post(shippingController.createNewShipping) // create
    .patch(shippingController.updateShipping) // update
    .delete(shippingController.deleteShipping) // delete

module.exports = router