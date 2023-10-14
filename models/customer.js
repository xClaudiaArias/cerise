const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        active: {
            type: Boolean,
            default: true
        },
        token: {
            type: String
        }
    },
    { timestamps : true }
)

module.exports = mongoose.model('Customer', customerSchema )