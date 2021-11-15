import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppContext from "../context";
import { makeStyles } from "@mui/styles";
import Config from "../config";
import axios from "axios";

// Uncommented the first one for local dev development.
// const URL = Config.devApiUrl;
const URL = Config.dockerRunApi;

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    height: "100%",
  },
  movieTitle: {
    color: "white",
    textAlign: "center",
  },
  movieContent: {
    color: "white",
  },
  posterImage: {
    width: 300,
  },
  backButton: {
    color: "white",
  },
});

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const classes = useStyles();
  const { handleShowModalClose, openShowDetails, selectedMovieimdb } =
    useContext(AppContext);

  useEffect(() => {
    async function getShowImages() {
      const response = await axios.get(
        `${URL}/movie-images/${selectedMovieimdb}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      if (response) setShowImage(response?.data);
    }
    if (openShowDetails) getShowImages();
  }, [selectedMovieimdb, openShowDetails]);

  useEffect(() => {
    async function getMovieDetails() {
      const response = await axios.get(
        `${URL}/movie-details/${selectedMovieimdb}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );

      if (response) setMovieDetails(response?.data);
    }
    if (openShowDetails) getMovieDetails();
  }, [selectedMovieimdb, openShowDetails]);
  return (
    <div>
      <Dialog
        fullScreen={true}
        open={openShowDetails}
        onClose={handleShowModalClose}
      >
        <Grid container className={classes.root}>
          <Grid alignSelf="center" item md={12}>
            <DialogTitle className={classes.movieTitle}>
              {movieDetails?.title}
            </DialogTitle>
          </Grid>
          <DialogContent>
            <Grid container>
              <Grid item md={6}>
                <img
                  alt="movie-poster"
                  className={classes.posterImage}
                  src={showImage?.poster}
                />
              </Grid>
              <Grid item md={6}>
                <DialogContentText>
                  {movieDetails?.description}
                </DialogContentText>

                <img
                  alt="movie-fan-art"
                  className={classes.posterImage}
                  src={showImage?.fanart}
                />
                <DialogContentText>{movieDetails?.directors}</DialogContentText>

                <DialogContentText>
                  Stars: {movieDetails?.stars}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Release date: {movieDetails?.release_date}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Countries: {movieDetails?.countries}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Vote count: {movieDetails?.vote_count}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Rated: {movieDetails?.rated}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Genres: {movieDetails?.genres}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Imdb Rating: {movieDetails?.imdb_rating}
                </DialogContentText>
                <DialogContentText className={classes.movieContent}>
                  Popularity: {movieDetails?.popularity}
                </DialogContentText>
              </Grid>
            </Grid>
          </DialogContent>
          <Grid container>
            <Grid item md={12}>
              <DialogActions>
                <Button
                  variant="outlined"
                  className={classes.backButton}
                  onClick={handleShowModalClose}
                >
                  Back
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
