// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var env = require("dotenv").config({path: '../.env'});


// 3 functions that are called in the connection file and reach to the ORM file
var burgers = {
  // the all function calls orm.selectall query and sends info to cb function
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });       
  },
  // the add function calls orm.insertOne query adding a new burger receiving name from user
  add: function(burgerName,cb) {
    orm.insertOne(burgerName,function(res){
      cb(res);
    });
    
  },
  // the update function calls orm.updateOne query updating a burger's devoured status
  update: function(id,cb){
    orm.updateOne(id,function(res){
      cb(res)
    });  
  }
};

// Export the database functions for the controller file
module.exports = burgers;
