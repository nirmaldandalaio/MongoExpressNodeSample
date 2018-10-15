const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    groupname: String,
    members: Array
});

module.exports = mongoose.model('Group', GroupSchema);