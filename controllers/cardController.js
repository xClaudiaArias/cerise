const Card = require('../models/Card')
const asyncHandler = require('express-async-handler')

// @desc get all Cards
// @route GET /Cards
// @access Private

const getAllCards = asyncHandler(async (req, res) => {

})

// @desc create newall Cards
// @route POST /Cards
// @access Private

const createNewCard = asyncHandler(async (req, res) => {

})

// @desc updateCards
// @route PATCH /Cards
// @access Private

const updateCard = asyncHandler(async (req, res) => {
    
})

// @desc PATCH Cards
// @route POST /Cards
// @access Private

const deleteCard = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllCards,
    createNewCard,
    updateCard,
    deleteCard
}