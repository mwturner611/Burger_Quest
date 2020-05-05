// Import MySQL connection.
var connection = require("./connection.js");
var env = require("dotenv").config({path: '../.env'});


var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            
            cb(result);
        });
    },
    insertOne: function(burgerName,cb){
        connection.query("INSERT INTO burgers SET ?",
        {
            burger_name: burgerName,
            devoured: false

        },function(err,result) {
            if(err) {
                throw err;
            }

            cb(result)
        });
    },
    updateOne: function(id,cb){

        var nbrID = parseInt(id);

        connection.query("UPDATE burgers SET ? WHERE ?",
        [
            {
                devoured: true
            },
            {
                id: nbrID
            }
        ],
        function(err,result){
            if(err){throw err}

            cb(result);
        })
    }
};

module.exports = orm;