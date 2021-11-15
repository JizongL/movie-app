import React, { Fragment, useEffect, useContext } from "react";
import { Container, Grid } from "@mui/material";
import AppBarSearch from "./AppBarSearch";
import MovieList from "./ShowsList";
import MovieDetails from "./ShowsDetails";
import AppContext from "../context";
import Config from "../config";
import axios from "axios";

// Uncommented the first one for local dev development.
const URL = Config.devApiUrl;
// const URL = Config.dockerRunApi;

export default function MovieSearch() {
  const { alignment, viewAllMovies, search, setSearch, tv, setTv } =
    useContext(AppContext);

  useEffect(() => {
    async function getSearch() {
      // const response = await axios.get('/search?title="matrix"');
      const response = await axios.get(`${URL}/search-tv?title=${search}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      if (response) setTv(response?.data?.movie_results);
    }
    if (search !== "") getSearch();
  }, [search, setMovies]);
  function handleInputOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Fragment>
      <AppBarSearch handleInputOnChange={handleInputOnChange} />
      <MovieDetails />
      <Container style={{ maxHeight: "100vh", marginTop: 30 }}>
        <Grid container>{search !== "" && viewAllMovies && <MovieList />}</Grid>
      </Container>
    </Fragment>
  );
}
