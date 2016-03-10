var  express = require('express'),
	 app = express(),
	 bodyParser = require('body-parser'),
	 session = require('express-session'),
     sessionConfig = require('./config/sessionConfig.js'),
	 cors = require('cors'),
	 port = 9125,
     corsOptions = {
        origin: 'http://localhost:' + port
	 },
	 profileCtrl = require('./controllers/profileCtrl.js'),
	 userCtrl = require('./controllers/userCtrl.js');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session(sessionConfig));

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);

app.listen(port, function() {
	console.log('Listening on ' + port);
});