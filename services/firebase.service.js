var config = require('./../config');
var firebase = require('firebase');

firebase.initializeApp({
	serviceAccount: './firebaseCredentials.json',
	databaseURL: config.databaseURL
});
var HelpersService = require('../services/helpers.service');

class FirebaseService {
	constructor() {

	}

	getUsers() {
		return firebase.database().ref('users');
	}

}

module.exports = new FirebaseService();