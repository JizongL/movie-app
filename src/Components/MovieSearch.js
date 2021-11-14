import React, { Fragment, useEffect, useContext } from "react";
import { Container, Grid } from "@mui/material";
import AppBarSearch from "./AppBarSearch";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import AppContext from "../context";
import axios from "axios";
// const URL_TEMP = "http://localhost:5000";
const URL_TEMP = "";
export default function MovieSearch() {
  const { search, setSearch, movies, setMovies } = useContext(AppContext);

  useEffect(() => {
    async function getSearch() {
      // const response = await axios.get('/search?title="matrix"');
      const response = await axios.get(`${URL_TEMP}/search?title=${search}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      if (response) setMovies(response?.data?.movie_results);
    }
    getSearch();
  }, [search, setMovies]);
  function handleInputOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Fragment>
      <AppBarSearch handleInputOnChange={handleInputOnChange} />
      <MovieDetails />
      <Container style={{ maxHeight: "100vh", marginTop: 30 }}>
        <Grid container>{search !== "" && <MovieList movies={movies} />}</Grid>
      </Container>
    </Fragment>
  );
}
