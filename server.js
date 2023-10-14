c
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)

connectDB()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/', express.static(path.join(__dirname, 'public')))


// ROUTES
app.use('/', require('./routes/root'))
app.use('/customers', require('./routes/customerRoutes'))
app.use('/billing', require('./routes/billingRoutes'))
app.use('/cards', require('./routes/cardRoutes'))
app.use('/categories', require('./routes/categoryRoutes'))
app.use('/orders', require('./routes/orderRoutes'))
app.use('/payments', require('./routes/paymentRoutes'))
app.use('/products', require('./routes/productRoutes'))
app.use('/shipping', require('./routes/shippingRoutes'))
app.use('/login', require('./routes/loginRoutes'))
app.use('/register', require('./routes/registerRoutes'))

app.use('/admin-login', require('./routes/admin-loginRoutes'))
app.use('/admin-register', require('./routes/adminRoutes'))
app.use('/admin-dash', require('./routes/adminRoutes'))


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})