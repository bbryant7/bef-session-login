const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// create an array of usernames/passwords
const username_password = []

app.use(function (req, res, next) {
  console.log('in interceptor');
  // if req.url == '/login'
	// 	next()
	// else if !req.session.username
	// 	res.render('login')
	// else
	// 	next()

  // this call to next goes away when you replace the pseudo code with real code
  next()
})

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/login', function (req, res) {
  console.log("username is " + req.body.username);
  console.log("password is " + req.body.password);

  // loop through array to match username and password
  // if you find a match then set req.session.login = true
  // req.session.username = req.body.username
  // res.render('home')

  // BUT if did not find match
  // res.render('login', pass error message to mustache)

  // This code to render home goes away when you replace the pseudo code with real code
  res.render('home')
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
