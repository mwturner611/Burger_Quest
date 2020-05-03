// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// orm.selectAll('burgers');
// orm.insertOne("new Burger");
// orm.updateOne(4);


var burgers = {
  all: function() {
    var burgerList = orm.selectAll("burgers")
    .then(function(){
      console.log(burgerList)
      // return burgerList;
    });   
  },

  
  add: function(newBurger) {
    orm.insertOne(newBurger)
  },

  update: function(id){
    orm.updateOne(id);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
