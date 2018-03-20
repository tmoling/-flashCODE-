var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

console.log("loaded quest contr");


//every route already has /questions in front of it.
router.get('/', function(req,res) {
	console.log("hit questions path");
	
	var query = "SELECT questions, answers FROM flashcards WHERE id = ?"

	connection.query(query, [req.session.questNum], function(err, result) {
		req.session.logged_in = true;

	 res.render('index', {
			logged_in: req.session.logged_in,
			answer: result[0].answers,
			question: result[0].questions, //this is the randomly chosen question
			username: req.session.username
		 });
		
	 });
	 
 });

router.post('/submit', function(req,res){
	 req.session.logged_in = true;
	 var input = req.body.user_input;
	 console.log(input);

	 res.render('index',{
		 input: input
	 })

 });
 



//  router.post('/input', function(req,res){
// 	 req.session.logged_in = true;

// 		 if(req.session.user_input === '') {

// 			res.render('index', {
// 				logged_in: req.session.logged_in,
// 				// questions: result[0].questions, //this is the randomly chosen question
// 				username: req.session.username
// 			});
// 		 }
// 		 res.render('index', {
// 			logged_in: req.session.logged_in,
// 			// questions: result[0].questions, //this is the randomly chosen question
// 			input:res.session.user_input,	
// 			// answer: result[0].answers,
// 			username: req.session.username
// 		 });
		 
		 
//  });
module.exports = router;
