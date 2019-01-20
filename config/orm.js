let db = require("./connection");

const burgersDb = {
    selectAll: function(cb){
        db.query("SELECT * FROM burgers", (error, result, fields) => {
            if (error) {
                return result.status(500).end();
              }
            
            cb(result);
        })
    },
    insertOne: function(cb){
        db.query("INSERT INTO burgers (burger_name) VALUES (?)", [req])
    },
    updateOne: function(){

    }
}

module.exports = burgersDb;
