var express = require("express");
var env = require("dotenv").config({path: '../.env'});

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data){
    var list = {
      burgers: data
    };
    
    res.render("index",list);
  })
});

router.post("/api/burger", function(req,res){
  burgers.add(req.body.name,function(result){
    
    res.json({id: result.insertID});
  });
})

router.put("/api/burger/:id", function (req,res){


  var devoured = req.params.id;

  burgers.update(devoured,function(result){
    if(result.changedRows == 0){
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  })
})

// Export routes for server.js to use.
module.exports = router;
