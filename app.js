const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const path = require('path');
// const cors = require('cors');
const app = express();
dotenv.config({
    path: './config/config.env',
});
// // Cors
// const corsOptions = {
//   origin: process.env.ALLOWED_CLIENTS.split(','),
// };
// app.use(cors(corsOptions));
app.use(express.static('public'));

connectDB();

app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});