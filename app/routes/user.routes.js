module.exports = (app) => {
    const users = require('../controllers/user.controller.js');


    //Create a new user
    app.post('/users', users.create);

    //Retrive all users
    app.get('/users', users.findAll);

    //Retrieve a single user with userID
    app.get('/users/:userId', users.findOne);

    //Delete a user with userId
    app.delete('/users/:userId', users.delete);

    //Profile for a user
    app.post('/profile', users.createprofile);

    //Get all profiles
    app.get('/profile', users.findAllProfiles);
}