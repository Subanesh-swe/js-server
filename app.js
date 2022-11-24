// JavaScript source code
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log('connected to the database'));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hi');
})