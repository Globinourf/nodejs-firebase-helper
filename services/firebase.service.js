var config = require('./../config');
var firebase = require('firebase');

firebase.initializeApp({
	serviceAccount: './firebaseCredentials.json',
	databaseURL: config.databaseURL
});

class FirebaseService {
	constructor() {
		this.usersRef = firebase.database().ref('users');
	}

	getUsers() {
		return new Promise((resolve, reject) => {
			this.usersRef.once('value', (snapshot) => {
				resolve(snapshot.val());
			}, (err) => {
				reject(err);
			})
		});
	}

}

module.exports = new FirebaseService();
