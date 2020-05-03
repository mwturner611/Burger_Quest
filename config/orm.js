// Import MySQL connection.
var connection = require("./connection.js");


var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[table], function(err, result){
            if(err) throw err;
            
            return result;
        });
    },
    insertOne: function(burgerName){
        connection.query("INSERT INTO burgers SET ?",
        {
            burger_name: burgerName,
            devoured: false

        },function(err,results) {
            if(err){throw err}
            ;
        })
    },
    updateOne: function(id){
        connection.query("UPDATE burgers SET ? WHERE ?",
        [
            {
                devoured: true
            },
            {
                id: id
            }
        ],
        function(err,results){
            if(err){throw err}
        })
    }
};

module.exports = orm;