import React, { Fragment, useEffect, useContext } from "react";
import { Container, Grid } from "@mui/material";
import AppBarSearch from "./AppBarSearch";
import ShowsList from "./ShowsList";
import MovieDetails from "./ShowsDetails";
import AppContext from "../context";
import Config from "../config";
import axios from "axios";

// Uncommented the first one for local dev development.
const URL = Config.devApiUrl;
// const URL = Config.dockerRunApi;

export default function MovieSearch() {
  const {
    alignment,
    setViewAllShows,
    viewAllShows,
    search,
    setSearch,
    setShows,
  } = useContext(AppContext);
  let searchEndpoint =
    alignment === "movies" ? "search-movies" : "search-tvshows";
  let dataKeyName = alignment === "movies" ? "movie_results" : "tv_results";

  useEffect(() => {
    async function getSearch() {
      const response = await axios.get(
        `${URL}/${searchEndpoint}?title=${search}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );

      if (response) setShows(response?.data?.[dataKeyName]);
    }
    if (search !== "") getSearch();
  }, [search, setShows, dataKeyName, searchEndpoint]);
  function handleInputOnChange(e) {
    setSearch(e.target.value);
    setViewAllShows(false);
  }

  return (
    <Fragment>
      <AppBarSearch handleInputOnChange={handleInputOnChange} />
      <MovieDetails />
      <Container style={{ maxHeight: "100vh", marginTop: 30 }}>
        <Grid container>{search !== "" && viewAllShows && <ShowsList />}</Grid>
      </Container>
    </Fragment>
  );
}
