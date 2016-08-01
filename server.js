var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MainCtrl = require('./controllers/main.controller');
var config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.get('/', (req, res) => {
	res.status(200).send('Hello world !');
});

// helper 1
app.get('/help1', (req, res) => {
	MainCtrl.help1(req, res);
});

// Get users
app.get('/users', (req, res) => {
   MainCtrl.getUsers (req, res);
});

app.listen(4000, () => {
	console.log('App listening on port 4000');
});