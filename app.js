const http = require("http");
const express = require("express");
const Article = require("./article.model");
const bodyParser = require("body-parser");

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database code
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let dbURL =
  "mongodb://localhost:27017/" +
  (process.env.NODE_ENV === "test" ? "testDB" : "realDB");
dbURL = process.env.NODE_ENV === "prod" ? process.env.db : dbURL;

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", function (err) {
  console.log(err);
});
//end of database

//api call
app.get("/", function (request, response) {
  try {
    response.status(200).json({ message: "ok" });
  } catch (error) {
    response.status(500).json({ error: error });
  }
});
app.post("/article/new", function (request, response) {
  var newArticle = new Article(request.body);
  newArticle.save(function (err, data) {
    if (err)
      return response.status(400).json({ error: "Could not save article" });
    return response
      .status(200)
      .json({ message: "Article created successfully" });
  });
});

app.get("/articles/all", function (request, response) {
  Article.find({}, function (err, data) {
    response.status(200).json(data);
  });
});

//server running
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => {
  console.log("Server running");
});
module.exports = { app, server, mongoose };
