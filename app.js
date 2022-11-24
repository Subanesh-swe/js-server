// JavaScript source code
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Register = require('./database_st_at.js');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log('connected to the database'));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('*', async(req, res) => {
    const body_data = req.body;
    const register = new Register({ data: JSON.stringify(body_data), path: JSON.stringify(req.params) });
    console.log(body_data);
    console.log(req.params);
    try {
        await register.save();
        res.status(200).send('Hello there, this is an end point for Airtel.IQ');

    } catch (err) {
        res.json({ message: err });
    }
})

app.post('*', async (req, res)=> {
    const body_data = req.body;
    const register = new Register({ data: JSON.stringify(body_data), path: JSON.stringify(req.params) });
    console.log(body_data);
    console.log(req.params);
    try {
        await register.save();
        res.status(200).send('success')
    } catch (err) {
        res.json({ message: err });
    }
})