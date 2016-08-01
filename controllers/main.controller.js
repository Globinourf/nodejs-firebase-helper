var FirebaseService = require('../services/firebase.service');

class MainCtrl {
	constructor() {
	}

	help1(req, res) {
		res.status(200).send('Hello world !')
	}

	getUsers(req, res) {
		FirebaseService.getUsers().then((users) => {
		    res.status(200).send(users);
		},(err) => {
		    res.status(400).send(err);
		});
	}
}

module.exports = new MainCtrl();
