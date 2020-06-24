const mongoose = require('mongoose');

const FolgaSchema = new mongoose.Schema({
    chapa: String,
    folga: String,
});

module.exports = mongoose.model('folgas', FolgaSchema);