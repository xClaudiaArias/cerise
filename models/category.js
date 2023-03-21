const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }],
    name: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Category', categorySchema)