const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose)

const orderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Customer'
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        }],
        total: {
            type: Number,
            required: true,
            get: getPrice, 
            set: setPrice
        }
    },
    {
        timestamps: true
    }
)

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

// orderSchema.plugin(AutoIncrement, {
//     inc_field: 'order',
//     id: 'orderNums',
//     start_seq: 0
// })


module.exports = mongoose.model('Order', orderSchema)