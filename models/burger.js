let orm = require("../config/orm");


const burgers = {
    allData: function(cb) {
        orm.selectAll(function(result){
            cb(result);
        })
    },
    
}

module.exports = burgers;


