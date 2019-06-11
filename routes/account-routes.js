var db = require("../models");

module.exports = function(app) {
  // POST route for adding a new account
  app.post("/api/accountSubmit", function(req, res) {
    db.Account.create(req.body).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });
};
