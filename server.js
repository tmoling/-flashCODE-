var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
app = express();

var PORT = process.env.PORT || 3000;

// this sets up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// this sets up static files in express
app.use(express.static(path.join(__dirname, '/public')));
//this sets up routes by requiring from routing folder 
//this sends api and html pages through require 
//remember server acts as the main js file here
require('./routes/path.js')(app);
var usersController = require('./controllers/usersController.js');

app.use('/', usersController);

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// this starts the server to begin listening
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});









//we need route to populate this randomly chosen question on page
// var query = 'SELECT questions FROM flashcards WHERE id = ?'
//     connection.query(query)


// Add CommentCollapse 
// Message Input

// Message Jake, Ryan Walters

// *bold* _italics_ ~strike~ `code` ```preformatted``` >quote
// About this conversation


// Pinned Items
 
// 3 Members
