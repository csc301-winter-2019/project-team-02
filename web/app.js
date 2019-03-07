var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
var uri;
if (env === 'development') {
	// uri = 'mongodb://localhost:27017/helpthehome'
	// use for small testing only if really necessary
	uri = 'mongodb+srv://development:dreamteam@cluster0-krnr4.mongodb.net/helpthehome?retryWrites=true'
} else if (env === 'qa') {
	uri = process.env.MONGODB_URI
} else if (env === 'production') {
	uri = ''
}

// Mongoose connection to MongoDB
mongoose.connect(uri, { useNewUrlParser: true }, function (error) {
	if (error) {
		console.log(error);
		console.log("App was not able to connect to the mongo server!");
		console.log("... double check that the mongo server is running locally");
	} else {
		  console.log(`connected to ${uri}`);
	}
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
