'use strict';

var express = require('express');
var app = express();

app.use(express.static('web'));
app.use(express.static('bower_components'));

app.listen(3000);
console.log("Server running on port 3000");
