const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors());

//For Database Connection
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString,{useNewUrlParser: true})
.then(() =>{
    app.listen(3001, () => {
        console.log("server is running on port 3001 and Database connected")
    })
})
.catch(() => {
    console.log("server error")
})
// const database = mongoose.connection
// database.on('error',(error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })


//Server Listen 


//Routes
app.use('/api',routes)
