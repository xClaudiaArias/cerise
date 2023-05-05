const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')

router.route('/')
    .get(adminController.getAllAdmins) // read
    .post(adminController.createNewAdmin) // create
    .patch(adminController.updateAdmin) // update
    .delete(adminController.deleteAdmin) // delete

module.exports = router