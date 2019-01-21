//import the orm that talks to the database in this case mysql
let orm = require("../config/orm");


const burgers = {
    allData: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        })
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

}
//export the functions for use in controller
module.exports = burgers;