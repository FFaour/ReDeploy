var db = require("../models");

module.exports = function(app) {
  // Get all accounts
  app.get("/api/accounts", function(req, res) {
    db.Account.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // POST route for saving a new donation
  // eslint-disable-next-line prettier/prettier
  app.post("/api/supplies/:description/:quantity/:unit/:charity", function(req,res) {
    console.log(req.body);
    // Check for valid parameters before adding to the database
    if ((req.params.quantity = "number" && req.params.quantity !== 0)) {
      db.Supplies.create({
        // eslint-disable-next-line camelcase
        item_description: req.params.description,
        quantity: req.params.quantity,
        unit: req.params.unit,
        charity: req.params.charity
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    }
  });

  // Create a new account
  app.post("/api/accounts", function(req, res) {
    db.Account.create({
      id: req.body.id,
      userName: req.body.userName,
      password: req.body.password,
      address: req.body.address,
      state: req.body.state,
      zipcode: req.body.zipcode,
      contactName: req.body.contactName,
      phoneNumber: req.body.phoneNumber,
      faxNumber: req.body.faxNumber,
      email: req.body.email
    }).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id
  app.delete("/api/accounts/:id", function(req, res) {
    db.Account.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });
};
