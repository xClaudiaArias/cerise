const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    categoryName: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Category', categorySchema)