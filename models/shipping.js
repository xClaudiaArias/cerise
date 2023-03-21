const mongoose = require('mongoose');

const shipping_addrSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Order'
        },
        street: {
            type: String,
            required: true
        },
        street2: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        hasShipped: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Shipping', shipping_addrSchema)