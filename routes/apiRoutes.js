var db = require("../models");

module.exports = function(app) {
  // Get all accounts
  app.get("/api/accounts", function(req, res) {
    db.Account.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  //Get all supplies
  app.get("/api/supplies", function(req, res) {
    db.Supplies.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // POST route for saving a new acount
  app.post("/api/accounts", function(req, res) {
    db.Account.create({
      id: req.body.id,
      userName: req.body.userName,
      password: req.body.password,
      organization: req.body.organization,
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

  // POST route for saving Supplies
  app.post("/api/supplies", function(req, res) {
    console.log(req.body);
    db.Supplies.create({
      // eslint-disable-next-line camelcase
      item: req.body.item,
      quantity: req.body.quantity,
      unit: req.body.unit,
      charity: req.body.charity,
      status: req.body.status
    }).then(function(result) {
      res.json(result);
    });
  });

  // Delete an account by id
  app.delete("/api/accounts/:id", function(req, res) {
    db.Account.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });
};
