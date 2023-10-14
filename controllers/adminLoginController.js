const Admin = require('../models/Admin')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const AdminLogin = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;

        // no empty fields
        if (!(username && password)) {
            res.status(400).send("All inputs are required")
        };
        // see if customer exists
        const admin = await Admin.findOne({ username });

        if (admin && (await bcrypt.compare(password, admin.password))) {
            
            const accessToken = jwt.sign(
                {admin_id: admin._id, username },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "2h"}
            );

            admin.token = accessToken;

            res.status(200).json(admin)
        } else {
            res.status(400).send("Invalid credentials")
        }
        




    } catch (err) {
        console.log(err)
    }
})




// add refresh here:    


// __________ refresh 👆

// const logout =  (req, res) => {
//     const cookies = req.cookies
//     if (!cookies.jwt) return res.status(204)

//     res.clearCookie('jwt', {         
//         httpOnly: true,
//         secure: true,
//         sameSite: 'None'
//     })

//     res.json({ message: 'Cookie Cleared' })
// }


module.exports = {
    AdminLogin,
    // logout
}

