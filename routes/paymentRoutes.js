const express = require('express');
const router = express.Router()
const paymentController = require('../controllers/paymentController')

router.route('/')
    .get(paymentController.getAllPayments) // read
    .post(paymentController.createNewPayment) // create
    .patch(paymentController.updatePayment) // update
    .delete(paymentController.deletePayment) // delete

module.exports = router