"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "production";
var config = require(__dirname + "/config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
require("dotenv").config();
var db = require("./models");
var express = require("express");

// Set up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text({ type: "text/html" }));
app.use(express.static("app"));

// Routes
// =============================================================
require("./routes/supplier-routes.js")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/account-routes.js")(app);

var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
