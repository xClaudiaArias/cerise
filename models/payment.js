const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Card'
    },
    processed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Payment', paymentSchema)