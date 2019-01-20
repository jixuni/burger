let express = require("express");

let router = express.Router();

let burger = require("../models/burger");


router.get("/", function(req, res) {
    burger.allData(function(data) {
        console.log(data);
        res.render("index", {burgers: data});
    })
    
})

router.post("/api/burgers", function(req, res){

})
module.exports = router;
