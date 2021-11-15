const express = require("express");
const app = express();
const Utils = require("./utils");
const path = require("path");
var axios = require("axios").default;
var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/ping", (req, res) => {
  res.send("healthy");
});

app.get("/tv-images/:imdb_id", (req, res) => {
  const { imdb_id } = req.params;
  const options = Utils.createOption({
    type: "get-movies-images-by-imdb",
    imdb: imdb_id,
  });
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/tv-details/:imdb_id", (req, res) => {
  const { imdb_id } = req.params;
  const options = Utils.createOption({
    type: "get-movie-details",
    imdb: imdb_id,
  });
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/movie-images/:imdb_id", (req, res) => {
  const { imdb_id } = req.params;
  const options = Utils.createOption({
    type: "get-movies-images-by-imdb",
    imdb: imdb_id,
  });
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/movie-details/:imdb_id", (req, res) => {
  const { imdb_id } = req.params;
  const options = Utils.createOption({
    type: "get-movie-details",
    imdb: imdb_id,
  });
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/search-movies", (req, res) => {
  const { title } = req.query;
  const options = Utils.createOption({ type: "get-movies-by-title", title });
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/search-tvshows", (req, res) => {
  const { title } = req.query;
  const options = Utils.createOption({ type: "get-shows-by-title", title });
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = app;
