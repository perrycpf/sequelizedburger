// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
        var burgerObject = {
            burgers:data
        };
        res.render("index", burgerObject);
    }).catch((err) => {
        res.json(err);
    });
  });

  // POST route for saving a new burger.
  app.post("/burger", function(req, res) {
    db.burgers.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    }).catch((err) => {
        res.json(err);
    });
  });

  // PUT route for updating burger.
  app.put("/:id", function(req, res) {
    console.log("req :" + req.params.id);
    db.burgers.update({
        devoured: true
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    }).catch((err) => {
        res.json(err);
    });
  });

};