const mongoose = require('mongoose');

const EscalaSchema = new mongoose.Schema({
    dataescala: String,
    codlinhaescala: String,
    matescala: String,
    servicoescala: String,
    veiculoescala: String,
    hriniescala: String,
    hrfimescala: String,
    origemescala: String,
    pegadaescala: String,
});

module.exports = mongoose.model('escalas', EscalaSchema);