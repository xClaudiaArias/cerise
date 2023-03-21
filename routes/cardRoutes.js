const express = require('express');
const router = express.Router()
const cardController = require('../controllers/cardController')

router.route('/')
    .get(cardController.getAllCards) // read
    .post(cardController.createNewCard) // create
    .patch(cardController.updateCard) // update
    .delete(cardController.deleteCard) // delete

module.exports = router