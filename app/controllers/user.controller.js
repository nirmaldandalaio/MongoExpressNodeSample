const User = require('../models/user.model');

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