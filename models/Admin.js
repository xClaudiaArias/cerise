const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
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
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        
        token: {
            type: String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps : true }
)

module.exports = mongoose.model('Admin', adminSchema )



