const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config({
    path: './config/config.env'
})

app.get('/', (req, res) => {
    res.send('FIleSharing app')
})


const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})