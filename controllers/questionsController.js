var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

console.log("loaded quest contr");


//every route already has /questions in front of it.
router.get('/', function(req,res) {
	console.log("hit questions path");
	
	var query = "SELECT questions FROM flashcards WHERE id = ?"

	connection.query(query, [req.session.questNum], function(err, result) {
		req.session.logged_in = true;
	 res.render('index', {
		 	logged_in: req.session.logged_in,
			// id: result[0].id,
			questions: result[0].questions,
			answers:result[0].answers,
			username: req.session.username
		 });
	 });
   
 });
 
module.exports = router;
