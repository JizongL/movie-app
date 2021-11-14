const express = require("express");
const app = express();
const path = require("path");
var axios = require("axios").default;
var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/ping", (req, res) => {
  res.send("healthy");
});

app.get("/images/:imdb_id", (req, res, next) => {
  const { imdb_id } = req.params;
  var options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: "get-movies-images-by-imdb", imdb: imdb_id },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": "8276975cdcmshb7c9353e1ec0139p1d2e37jsn8dac47faa8d1",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/details/:imdb_id", (req, res, next) => {
  const { imdb_id } = req.params;
  var options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: "get-movie-details", imdb: imdb_id },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": "8276975cdcmshb7c9353e1ec0139p1d2e37jsn8dac47faa8d1",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/search", (req, res, next) => {
  const { title } = req.query;
  var options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: "get-movies-by-title", title },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": "8276975cdcmshb7c9353e1ec0139p1d2e37jsn8dac47faa8d1",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
