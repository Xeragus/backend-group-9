var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var propertiesRouter = require('./routes/properties');
const mongoose = require('mongoose')
const layouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

var app = express();

const mongoURI = require('./config/keys').MongoURI
// db connection
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
require('./config/passport')(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(layouts)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(flash())
app.use((req, res, next) => {
  res.locals.success_message = req.flash('success_message')
  res.locals.error_message = req.flash('error')
  next()
})

app.use('/', indexRouter);
app.use('/properties', propertiesRouter);

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
