var express = require('express');
var router = express.Router();
var passport = require('passport');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var app = require('express')();

io.on('connection', function(socket){
  console.log('a user connected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user});
});

module.exports = router;

// Setting up the Passport Strategies
require("../config/passport")(passport)

// Add code here:

router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'} ));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

router.get('/logout', function(req, res) {
  // console.log(req.user)
  req.logout();
  res.redirect('/')
  res.send('logout')
})

