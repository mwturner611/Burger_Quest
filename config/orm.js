// Import MySQL connection and dotenv
var connection = require("./connection.js");
var env = require("dotenv").config({path: '../.env'});

// create orm object with 3 queries.  
var orm = {
    // query 1 - returns all rows from table and sends result into call-back function
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            
            cb(result);
        });
    },

    // query 2 - adds a new burger to burger table accepting the name variable and puts in call back function
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

    // query 3 - changes an existing burger's devoured status accepting id variable and puts result in call back function
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


// export orm
module.exports = orm;