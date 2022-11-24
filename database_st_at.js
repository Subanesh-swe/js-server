// JavaScript source code
//database_st_at.js

const mongoose = require('mongoose');

const AtDataB = mongoose.Schema({
    data: {
        type: String
    },
    path: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Register', AtDataB)