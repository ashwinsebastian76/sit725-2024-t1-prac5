// models/carModel.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    firstName: String,
    familyName: String,
    phone: String,
    imageURL: String,
    bid: String
});

module.exports = mongoose.model('Car', carSchema);
