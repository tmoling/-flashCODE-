var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = require('../config/connection.js')
var fs = require('fs');

console.log("user controllers loaded");
//this is the users_controller.js file
router.get('/create', function (req, res) {
  console.log("hit the get for new user");
  res.render('users/new'); //render new.handlebars
});

router.post('/login', function (req, res) {
  console.log("hit post");
  var query = "SELECT * FROM users WHERE email = ?";

  connection.query(query, [req.body.email], function (err, response) {
    if (response.length == 0) {
      res.redirect('/users/create')
      return;
    }
    console.log("found user");

    bcrypt.compare(req.body.password, response[0].password_hash, function (err, result) {
      if (result == true) {

        req.session.logged_in = true;
        req.session.user_id = response[0].id;
        req.session.user_email = response[0].email;
        //req.session.company = response[0].company;
        req.session.username = response[0].username;


// go to questions
res.redirect('/questions');


      };

    });
  });
});

  router.get('/sign-in', function (req, res) {
    res.render('users/sign_in');
  });

  router.get('/sign-out', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/')
    });
    fs.unlink('log.pdf', (err) => {
      if (err) throw err;
      console.log('log.pdf was deleted');
    });
  });

  //if user trys to sign in with the wrong password or email tell them that on the page
  router.get('/login', function (req, res) {



    res.render('index');
    //           }else{
    //             res.redirect('/users/sign-in')
    //           }
    //       });
    // });
  });

  router.post('/create', function (req, res) {
    console.log("hit create post");
    var query = "SELECT * FROM users WHERE email = ?"

    connection.query(query, [req.body.email], function (err, response) {
      console.log(response)
      if (response.length > 0) {
        res.redirect(200, '/');
      } else {

        bcrypt.genSalt(10, function (err, salt) {
          //res.send(salt); //$2a$10$iFzdRYHKrNSOzwS/SDI/W.
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            //res.send(hash)

            var query = "INSERT INTO users (username, email, password_hash, flashcard_id ) VALUES (?, ?, ?, ?)"

            connection.query(query, [req.body.username, req.body.email, hash, 1], function (err, response) {
              if (err) throw err;

              req.session.logged_in = true;

              req.session.user_id = response.insertId; //only way to get id of an insert for the mysql npm package

              var query = "SELECT * FROM users WHERE id = ?"
              connection.query(query, [req.session.user_id], function (err, response) {
                req.session.username = response[0].username;
                req.session.user_email = response[0].email;
                req.session.company = response[0].company;

                res.redirect('/')
              });
            });
          });
        });

      }
    });


  });

  module.exports = router;
