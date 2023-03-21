const express = require('express');
const router = express.Router()
const billingController = require('../controllers/billingController')

router.route('/')
    .get(billingController.getAllBillings) // read
    .post(billingController.createNewBilling) // create
    .patch(billingController.updateBilling) // update
    .delete(billingController.deleteBilling) // delete

module.exports = router