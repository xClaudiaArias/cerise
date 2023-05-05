const Admin = require('../models/Admin')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc get all cdmins
// @route GET /cdmins
// @access Private

const getAllAdmins = asyncHandler(async (req, res) => {
    const cdmins = await Admin.find().select('-password').lean()
    if (!admins?.length) {
        return res.status(400).json({message: "No admins found"})
    }
    res.json(admins)
})

// @desc create newall cdmins
// @route POST /cdmins
// @access Private

const createNewAdmin = asyncHandler(async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body
    
    // confirm data 
    if ( !firstname || !lastname || !username || !email || !password ) {
        return res.status(400).json({message: "All fields are required"})
    }

    // check for duplicates 
    const duplicateUsername = await Admin.findOne({ username }).lean().exec()
    const duplicateEmail = await Admin.findOne({ email }).lean().exec()

    if (duplicateUsername) {
        return res.status(409).json({message: 'An account with this username already exists'})
    }
    if (duplicateEmail) {
        return res.status(409).json({message: 'An account with this email already exists'})
    }

    // Hash password

    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    // define cdmin object

    const adminObject = { firstname, lastname, email, username, "password": hashedPwd, phone }

    // create and store the new cdmin

    const admin = await Admin.create(adminObject)

    if (admin) {
        res.status(201).json({message: `New Admin ${username} created`})
    } else {
        res.status(400).json({message: "Invalid admin data received"})
    }

})

// @desc updatecdmins
// @route PATCH /cdmins
// @access Private

const updateAdmin = asyncHandler(async (req, res) => {
    const { id, firstname, lastname, username, email, password, active } = req.body

    // confirm data
    if (!id || !firstname || !lastname || !username || !email || typeof active !== 'boolean') {
        return res.status(400).json({message: "All fields are required"})
    }

    const admin = await Admin.findById(id).exec()

    if(!admin) {
        return res.status(400).json({message: "Admin Not Found"})
    }

    const duplicate = await Admin.findOne({ username }).lean().exec()

    // Allow update to original cdmin
    if(duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({message: "Duplicate username"})
    }

    admin.firstname = firstname
    admin.lastname = lastname
    admin.email = email
    admin.username = username
    admin.phone = phone
    admin.active = active

    if (password) {
        // hash pwd 
        admin.password = await bcrypt.hash(password, 10) // salt rounds
    }

    const updatedAdmin = await admin.save()

    res.json({message: `${updatedAdmin.username} updated`})
})

// @desc PATCH cdmins
// @route POST /cdmins
// @access Private

const deleteAdmin = asyncHandler(async (req, res) => {
    const { id } = req.body
    
    if (!id) {
        return res.status(400).json({message: "Admin id is required"})
    }

    // add any relationship here 

    // .....

    // define cdmin
    const admin = await Admin.findById(id).exec()

    if (!admin) {
        return res.status(400).json({message: "Admin not found"})
    } 

    const deletedAdmin = await admin.deleteOne()

    const response = `Username ${deletedAdmin.username} with ID ${deletedAdmin.id} deleted`

    res.json(response)
})

module.exports = {
    getAllAdmins,
    createNewAdmin,
    updateAdmin,
    deleteAdmin
}