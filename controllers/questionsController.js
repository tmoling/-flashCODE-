var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

console.log("loaded quest contr");
//every route already has /questions in front of it.
router.get('/', function(req,res) {
	console.log("hit questios path");
	
	var query = "SELECT * FROM questions"
	
	query = query + id; //query += id;

	connection.query(query, function(err, result) {
		// res.json(result[0]);
	 res.render('questions', {
			 id: result[0].id,
	   questions: result[0].questions
		 });
	 });
   
 });
 
	//make sure user inserting is a customer
	// if (!req.session.company){
	// 	var query = "INSERT INTO user_votes (user_id, c) VALUES (?, ?)"

	// 	connection.query(query, [ req.session.user_id, req.body.coupon_id ], function(err, response) {
			
	// 		res.redirect('/');
	// 	});
	// }else{
	// 	res.send('you do not have access to this because you are not a customer')
	// }
module.exports = router;
