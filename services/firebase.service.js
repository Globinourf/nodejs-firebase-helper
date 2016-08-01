var config = require('./../config');
var firebase = require('firebase');

firebase.initializeApp({
	serviceAccount: './firebaseCredentials.json',
	databaseURL: config.databaseURL
});

class FirebaseService {
	constructor() {

	}

	getUsers() {
		return firebase.database().ref('users');
	}

}

module.exports = new FirebaseService();
