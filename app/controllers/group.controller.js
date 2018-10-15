const Group = require('../models/group.model');

// Create and save a user
exports.create = (req, res) => {
    // Create a user
    const group = new Group({
        groupname: req.body.groupname,
        members: req.body.members,
    });

    group.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the user"
            })
        })
};

// // Retrieve all users from the db
exports.findAll = (req, res) => {
    Group.find()
        .then(groups => {
            if(!groups.length) {
                res.send({message: "There are no groups currently. Please add a group"});
            }
            res.send(groups);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
};

// // Find a single user with a userId
// exports.findOne = (req, res) => {
//     User.findById(req.params.userId)
//         .then(user => {
//             if(!user) {
//                 return res.status(404).send({
//                     message: "User not found with id " + req.params.userId
//                 })
//             }
//             res.send(user);
//         }).catch(err => {
//             return res.status(500).send({
//                 message: "Error retrieving the user with id " + req.params.userId
//             })
//         });
// };

// // Delete a user with a userId
// exports.delete = (req, res) => {
//     User.findByIdAndRemove(req.params.userId)
//         .then(user => {
//             if(!user) {
//                 return res.status(404).send({
//                     message: "User not found with id " + req.params.userId
//                 })
//             }
//             res.send({message: "User deleted successfully!"});
//         }).catch(err => {
//             return res.status(500).send({
//                 message: "Error deleting the user with id " + req.params.userId
//             })
//         });
// };