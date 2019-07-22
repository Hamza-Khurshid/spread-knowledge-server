//import nodemodule
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//import from custom files
var dbConnection = require ('./config/dbConnection');
var tutorRoute = require('./routes/tutors');
var studentRoute = require('./routes/students');
var tuitionRoute = require('./routes/tuitions');
var proposalRoute = require('./routes/proposals');

//add middleware
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//db connection
dbConnection();

// routes
app.use("/tutor", tutorRoute);
app.use("/student", studentRoute);
app.use("/tuition", tuitionRoute);
app.use("/proposal", proposalRoute);

app.get('/', function(req, res) {
  res.send('We welcome you here! Hamza Khurshid')
})

app.listen(8080, function() {
  console.log("express server running on port 8080");
});