const express = require('express');
const mongoose = require('mongoose');

const shoeRoutes = require('./routes/shoeRoutes');
const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json())
app.use(shoeRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/shoe');

app.listen(3000, () => console.log('Started server on: http://localhost:3000'));