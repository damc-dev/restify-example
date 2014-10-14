var userDao = require('./dao.js');

exports.getAllUsers = function() {
	var users = userDao.getAllUsers();
	return users.data;
}

exports.getUserByEmail = function(email) {
	var users = userDao.getUserByEmail(email);
	return users[0];
}