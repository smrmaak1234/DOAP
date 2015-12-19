var express = require('express');
var router = express.Router();



//npm install 
var Parse = require('Parse/node');
Parse.initialize('csxD2FRy3Q67PulnFGY7iz38OxGfGrDwCLrJriw5','sEnq69oluOsg9RRO0GUN8o2QnDgGpk2tvLjc7ced');


/* GET users listing. */
router.get('/', function(req, res, next) {

	var query = new Parse.Query(Parse.User);
	query.equalTo("uesrname", req.query.uesrname);
	query.find({
		success: function(user) {
			res.json('success: 회원조회 완료', {user:user});
		},
		error: function(user, error) {
			res.json('Error: 회원조회 실패', {error:error});
		}
	});
});
//GET /users
//회원가입
router.post('/', function(req, res, next) {
	//회원가입 넣기
	var user = new Parse.User();ㅋ`
	user.set("username", req.body.username);
	user.set("password", req.body.password);
	user.set("email", req.body.email);
 		
 	console.log(1)
	user.signUp(null, {
	 	success: function(user) {
	 		console.log(2)
	 		res.json('success: 회원가입 완료', {user:user});

	 	},
	 	error: function(user, error){
	 		console.log(3)
	 		res.json('Error: 회원가입 실패', {error:error});
	 	}
	 });
});

router.put('/:objectId', function(req, res, next) {

	var user = new Parse.User();
	user.set("username", req.body.username);
	user.set("password", req.body.password);
	user.set("email", req.body.email);
	user.send('users 회원 수정완료');
});


  
//POST /users
//회원 가입하기


//PUT
//회원 수정하기
router.delete('/', function(req, res, next) {
	var query = new Parse.Query(Parse.User);
	query.equalTo("uesrname", req.query.uesrname);
	query.find({
		success: function(user) {

			query.get(user.objectId, {
				success: function(userObejct) {
					res.json('회원삭제 완료', {userObejct:userObejct});
				},
		error: function(userObejct, error){

		}



module.exports = router;
