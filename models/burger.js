// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var env = require("dotenv").config({path: '../.env'});



var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });       
  },
  add: function(burgerName,cb) {
    orm.insertOne(burgerName,function(res){
      cb(res);
    });
    
  },
  update: function(id,cb){
    orm.updateOne(id,function(res){
      cb(res)
    });  
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
