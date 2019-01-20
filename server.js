let express = require("express");

let app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



let exphbs = require("express-handlebars");

//Telling handlebarjs to render as default page
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT,()=> {
    console.log("Server listening on http://locahost:" + PORT);
})

