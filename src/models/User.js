const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    chapafunc: String,
    nomefunc: String,
    anofunc: String
});

module.exports = mongoose.model('funcionarios', UserSchema);