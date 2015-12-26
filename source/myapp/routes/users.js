var express = require('express');
var router = express.Router();

/* GET users listing. */

var Parse = require('parse/node');
Parse.initialize("csxD2FRy3Q67PulnFGY7iz38OxGfGrDwCLrJriw5","sEnq69oluOsg9RRO0GUN8o2QnDgGpk2tvLjc7ced");


var Users = Parse.Object.extend("Users");

router.get('/signup',function(req,res,next){
	var user = new Users();
	user.set("name",req.query.name);
	user.set("password",req.query.password);
	user.set("age",req.query.age);
	user.set("isDeleted",false);
	user.save(null, {
		success: function(savedUser){
			res.send('가입' + savedUser.id);
		},
		error: function(user, error) {
			res.send('Failed to create new :' +error.message);
		}		
	});
});

router.get('/signup', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signout', function(req, res, next) {
	var query = new Parse.query(Users);

	
	//query.equalTo("name", "홍길동");
	//query.equalTo("password", "12344");
	//query.equalTo("isDeleted", true);
	//query.find({
		success: function(results) {
			var targetUser = results[0];
			targetUser.set("isDeleted",true);
			targetUser.save(null, {
                 	success: function(deletedUser) {
					res.send('탈퇴:' + deletedUser.id);
				},
				error: function(deletedUser, error) {
					res.send("Error:" +error.code +" "+ error.message);

			
			});
		},
		error: function(error) {
			res.send("Error:" +error.code + " " + error.message);
		}
	});
});
  res.send('respond with a resource');
});

router.get('/find', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
