const express = require('express')
const connectDatabase = require('./server')


const app = express()
require('dotenv').config()

const port = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('Hello ...')
})


app.listen(port, () => {
    console.log(`server is running on port ${port} `)
    connectDatabase()
        .then((res) => console.log('database is connected'))
        .catch((err) => console.log(err.message))


})


