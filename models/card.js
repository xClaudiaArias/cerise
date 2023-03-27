const mongoose = require('mongoose');

// credit card dummy version for testing 

const cardSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Customer'
        },
        holderName: {
            type: String,
            required: true
        },
        cardNum: {
            type: String,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        },
        exp_date: {
            type: Date,
            required: true
        },
        processed: {
            type: Boolean,
            default: false
        }
    },
    {timestamps : true}
)

module.exports = mongoose.model('Card', cardSchema)

