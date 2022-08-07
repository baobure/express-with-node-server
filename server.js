const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact me : blastiquemajar@gmail.com</h1>");
});

app.get("/about", function(req, res) {
  res.send("<h1> Hello, my name is Barnabas Obure<p> This is my first webpage routing with nodejs via express.</h1>");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Playing football</li><li>Coding</li></ul>")
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
