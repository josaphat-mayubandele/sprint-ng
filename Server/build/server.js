"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Import WelcomeController from controllers entry point
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = process.env.PORT || 3000;
// Mount the WelcomeController at the /welcome route
app.use('/', controllers_1.WelcomeController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
