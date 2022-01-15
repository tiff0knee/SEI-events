var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/students');
var eventsRouter = require('./routes/events');
var joinRouter = require('./routes/join');

var app = express();

const dotenv = require('dotenv').config();


//connect mongoDB with mongoose
require('./config/database');
//initialize passport js
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

//mount middleware (app.use)
//passport mounted to express
app.use(passport.initialize());
//using session to manage cookies
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/students', usersRouter);
app.use('/events', eventsRouter);
app.use('/join', joinRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('/', function (req, res){
//res.send(home)
res.render('home')

});

app.get('/events', function(req,res){
  const events = events.getAll();
  res.render('events/index', {events});
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
