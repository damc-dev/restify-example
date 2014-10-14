var loki = require('lokijs');
var userDb = new loki('userDatabase');

console.log('Dao');

// Initialize
var users = userDb.addCollection('users','User', ['email'], true);
// Add test data
var odin = users.insert( { name : 'odin', email: 'odin.soap@lokijs.org', age: 38 } );
var thor = users.insert( { name : 'thor', email : 'thor.soap@lokijs.org', age: 25 } );
var stan = users.insert( { name : 'stan', email : 'stan.soap@lokijs.org', age: 29 } );
var oliver = users.insert( { name : 'oliver', email : 'oliver.soap@lokijs.org', age: 31 } );
var hector = users.insert( { name : 'hector', email : 'hector.soap@lokijs.org', age: 15} );
var achilles = users.insert( { name : 'achilles', email : 'achilles.soap@lokijs.org', age: 31 } );


exports.getAllUsers = function() {
	console.log('Querying for all users');
	return users.view().collection;
};

exports.getUserByEmail = function(email) {
	console.log('Querying for user with email: ' + email);
	return users.find({'email': email });
};

