// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

//Request Targetting All Articles//

app.get("/", function (req, res) {
  res.send("Welcome to the Wiki API!");
});

app
  .route("/article")

  .get(function (req, res) {
    Article.find()
      .then(function (foundArticles) {
        res.send(foundArticles);
      })
      .catch(function (err) {
        res.send(err);
      });
  })

  .post(function (req, res) {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle
      .save()
      .then(() => {
        res.send("Successfully added a new article");
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .delete(function (req, res) {
    Article.deleteMany()
      .then(() => {
        res.send("Successfully deleted all articles");
      })
      .catch((err) => {
        res.send(err);
      });
  });

app.route("/articles/:articleTitle").get(function (req, res) {
  Article.findOne({ title: req.params.articleTitle })
    .then(function (foundArticle) {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No articles matching that title were found");
      }
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.route("/articles/:articleTitle").put(function (req, res) {
  Article.findOneAndUpdate(
    { title: req.params.articleTitle },
    { title: req.body.title, content: req.body.content },
    { overwrite: true }
  )
    .then(() => {
      res.send("Successfully updated article");
    })
    .catch((err) => {
      res.send(err);
    });
});

app
  .route("/articles/:articleTitle")
  .patch(function (req, res) {
    Article.findOneAndUpdate(
      { title: req.params.articleTitle },
      { $set: req.body }
    )
      .then(() => {
        res.send("Successfully updated article");
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .delete(function (req, res) {
    Article.findOneAndDelete({ title: req.params.articleTitle })
      .then(() => {
        res.send("Successfully deleted the corresponding article");
      })
      .catch((err) => {
        res.send(err);
      });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
