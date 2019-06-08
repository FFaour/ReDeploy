var db = require("../models");

module.exports = function(app) {
  // Get all accounts
  app.get("/api/accounts", function(req, res) {
    db.Account.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  //Get all donations
  app.get("/api/donations", function(req, res) {
    db.Donation.findAll({}).then(function(result) {
      res.json(result);
    });
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
