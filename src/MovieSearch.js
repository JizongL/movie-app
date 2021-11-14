import React, { Fragment, useEffect, useState, useContext } from "react";
import { Container, Grid } from "@mui/material";
import AppBarSearch from "./Components/AppBarSearch";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import AppContext from "./context";
import axios from "axios";
const URL_TEMP = "http://localhost:5000";
export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const { handleMovieModalClickOpen, openMovieDetails, setOpenMovieDetails } =
    useContext(AppContext);

  useEffect(() => {
    async function getSearch() {
      // const response = await axios.get('/search?title="matrix"');
      const response = await axios.get(`${URL_TEMP}/search?title=${search}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      if (response) setMovies(response?.data?.movie_results);
    }
    getSearch();
  }, [search]);
  function handleInputOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Fragment>
      <AppBarSearch handleInputOnChange={handleInputOnChange} />
      <MovieDetails />
      <Container style={{ marginTop: 30 }}>
        <Grid container>{search !== "" && <MovieList movies={movies} />}</Grid>
      </Container>
    </Fragment>
  );
}
