var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js');
var fs = require('fs');

console.log("loaded quest contr");


//every route already has /questions in front of it.
router.get('/', function(req,res) {
		//questNum is between 1 and 8
		req.session.questNum = Math.floor(Math.random() * Math.floor(8)) + 1; //8 needs to be updated...

		var query = "SELECT questions, answers FROM flashcards WHERE id = ?"

		connection.query(query, [req.session.questNum], function(err, result) {
			if(err) throw err;
			req.session.logged_in = true;

		res.render('index', {
				logged_in: req.session.logged_in,
				answer: result[0].answers,
				question: result[0].questions,//this is the randomly chosen question
				username: req.session.username
		 });
			console.log(result[0].answers);

		

			var append1 = fs.createWriteStream('log.txt', {
				flags: 'a' // 'a' means appending (old data will be preserved)
			})
			var append2 = fs.createWriteStream('log.txt', {
				flags: 'a' // 'a' means appending (old data will be preserved)
			})

			append1.write('\n\nQuestion: ' + JSON.stringify(result[0].questions));
			append2.write('\nAnswer: ' + JSON.stringify(result[0].answers));

			append1.end();
			append2.end();

	 });
	 
 });


router.post('/submit', function(req,res){
	 req.session.logged_in = true;
	 
		res.render('answer', {
			logged_in: req.session.logged_in,
			answer: req.session.res_answer,
			question: req.session.res_question, //this is the randomly chosen question
			input: req.body.user_input,
			username: req.session.username
	 });
	console.log(req.body.user_input);
 });
 

module.exports = router;
