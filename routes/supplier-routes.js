var db = require("../models");

module.exports = function(app) {
  // POST route for saving a new donation
  app.post("/api/supplySubmit", function(req, res) {
    db.Supplies.create(req.body).then(function(dbSupplies) {
      res.json(dbSupplies);
    });
  });
};
