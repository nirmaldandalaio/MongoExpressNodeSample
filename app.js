const express = require('express');
const bodyParser = require('body-parser');

//create exoress aoo
const app = express();
const path =  require('path');

//parse requests of content-type -  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the DB");
}).catch(err => {
    console.log("Could not connect to the DB");
    process.exit();
})

//define a simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/scripts', express.static(__dirname + '/scripts'));

//Require Users routes
const routes = require('./app/routes/user.routes.js')(app);
const grouproutes = require('./app/routes/group.routes.js')(app);

//listen for the port
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});