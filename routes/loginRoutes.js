const express = require('express');
const router = express.Router()
const loginController = require('../controllers/loginController')

// add logout here: 
router.route('/')
    .post(loginController.login)

module.exports = router
