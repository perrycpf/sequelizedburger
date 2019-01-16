// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

// Sets up the Express App
var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static content for the app from the "public" directory in the app directory
app.use(express.static("public"));

// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Require Express-Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);


//syncing our sequelize models and then starting our Export
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
  console.log(`Sequelized Eat Da Burger app is listening on PORT: ${PORT}`);
  });
});