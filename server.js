var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = module.exports = express();


var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 } }));
app.use(cookieParser());

app.use(express.static('public'));




// this sets up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


var applicationController = require("./controllers/applicationController.js");
var usersController = require('./controllers/usersController.js');
var questionsController = require('./controllers/questionsController.js');

app.use("/", applicationController);
app.use('/users', usersController);
app.use('/questions', questionsController);


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var PORT = process.env.PORT || 3000;
// this starts the server to begin listening
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});






