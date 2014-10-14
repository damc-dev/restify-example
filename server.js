var restify = require('restify');
var userService = require('./service.js');


function getAllUsers(req, res, next) {
	console.log('Retrieving all users');
	var users = userService.getAllUsers();
	console.log(users);
	res.contentType='json';
	res.send(users);
	next();
}

function getUserByEmail(req, res, next) {
	var email =  req.params.email;
	console.log('Retrieving user by email: ' + email);
	var user = userService.getUserByEmail(email);
	res.contentType='json';
	res.send(user);
	next();
}

var server = restify.createServer();

server.get('/users', getAllUsers);
server.head('/users', getAllUsers);

server.get('/users/email/:email', getUserByEmail);
server.head('/users/email/:email', getUserByEmail);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});