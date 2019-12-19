const express = require("express");
const path = require("path");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 8006;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});



