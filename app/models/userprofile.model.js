const mongoose = require('mongoose');

const UserProfileSchema = mongoose.Schema({
    id: String,
    friendList: [
        {
            id: String,
            movies: Array,
            likes: Number,
            dislikes: Number,
            confLevel: Number
        }
    ],
    watchList: [
        {
            id: String,
            movies: Array
        }
    ],
    groupList: Array
    
}, {
    timestamps: true
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);