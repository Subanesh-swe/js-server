// JavaScript source code
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log('connected to the database'));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hi');
})