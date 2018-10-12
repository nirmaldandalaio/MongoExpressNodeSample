const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    email: String
}, {
    timstamps: true
});

module.exports = mongoose.model('User', UserSchema);