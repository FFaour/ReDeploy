require("dotenv").config();
var db = require("./models");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: "application/*+json" }));

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

app.use(bodyParser.text({ type: "text/html" }));

//Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

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
