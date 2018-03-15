express = require('express');
bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({extended: false}));


//we need route to populate this randomly chosen question on page
var query = 'SELECT questions FROM flashcards WHERE id = ?'
    connection.query(query)