const express = require('express');
const router = express.Router()
const adminLoginController = require('../controllers/adminLoginController')

// add logout here: 
router.route('/')
    .post(adminLoginController.AdminLogin)

module.exports = router
