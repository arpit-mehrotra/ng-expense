var express = require('express');
var app = express();

var usercontroller = require('./appobjects/users/userscontroller');
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use('/users',usercontroller);

module.exports = app;
