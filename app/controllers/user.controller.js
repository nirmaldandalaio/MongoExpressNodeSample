const User = require('../models/user.model');
const UserProfile = require('../models/userprofile.model')

// Create and save a user
exports.create = (req, res) => {
    // Create a user
    const user = new User({
        userId: req.body.userId,
        username: req.body.username,
        email: req.body.email
    });

    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the user"
            })
        })
};

// Retrieve all users from the db
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            if(!users.length) {
                res.send({message: "There are no users currently. Please add a user"});
            }
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                })
            }
            res.send(user);
        }).catch(err => {
            return res.status(500).send({
                message: "Error retrieving the user with id " + req.params.userId
            })
        });
};

// Delete a user with a userId
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                })
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
            return res.status(500).send({
                message: "Error deleting the user with id " + req.params.userId
            })
        });
};

//Profile for a user
exports.createprofile = (req, res) => {
    // Create a user
    const userprofile = new UserProfile({
        id: req.body.id,
        friendList: [
            {
                id: req.body.friendList[0].id,
                movies: req.body.friendList[0].movies,
                likes: req.body.friendList[0].likes,
                dislikes: req.body.friendList[0].dislikes,
                confLevel: req.body.friendList[0].confLevel
            }
        ],
        watchList: [
            {
                id: req.body.watchList[0].id,
                movies: req.body.watchList[0].movies
            }
        ]
    });

    userprofile.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the user"
            })
        })
};

// Retrieve all users from the db
exports.findAllProfiles = (req, res) => {
    UserProfile.find()
        .then(userprofiles => {
            if(!userprofiles.length) {
                res.send({message: "There are no user profiles currently. Please add a user"});
            }
            res.send(userprofiles);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
};