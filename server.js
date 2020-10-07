// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var cors = require('cors');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/hello/:id', function (req, res, next) {
  res.json({msg: 'Hello world, we are CORS-enabled!'});
});

app.listen(80, function () {
  console.log('CORS-enabled web server is listening on port 80');
});

// Data
// ===========================================================
// var yoda = {
//   name: "Yoda",
//   role: "Jedi Master",
//   age: 900,
//   forcePoints: 2000
// };

// var darthmaul = {
//   name: "Darth Maul",
//   role: "Sith Lord",
//   age: 200,
//   forcePoints: 1200
// };

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
