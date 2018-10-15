module.exports = (app) => {
    const groups = require('../controllers/group.controller.js');

    //Create a new user
    app.post('/groups', groups.create);

    //Retrive all users
    app.get('/groups', groups.findAll);

    // //Retrieve a single user with userID
    // app.get('/groups/:groupId', groups.findOne);

    // //Delete a user with userId
    // app.delete('/groups/:groupId', groups.delete);
}