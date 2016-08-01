var FirebaseService = require('../services/firebase.service');

class MainCtrl {
	constructor() {
	}

	help1(req, res) {
		res.status(200).send('Hello world !')
	}

	getUsers(req, res) {
		FirebaseService.getUsers().$loaded().then((snap) => {
		    res.status(200).send(snap);
		},(err) => {
		    res.status(400).send(err);
		});
	}
}

module.exports = new MainCtrl();