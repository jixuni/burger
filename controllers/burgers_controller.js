let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/api/burgers", function(req, res){
    burger.allData(function(data){
        res.json(data);
    })
})

router.get("/", function (req, res) {
    burger.allData(function (data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    })

})

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.name], function (result) {
        // Send back the ID of the new data
        res.json({
            id: result.insertId
        });
       
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.update({

        devoured: req.body.devoured

    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//export routes to use in server.js
module.exports = router;
