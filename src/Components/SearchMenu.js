import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "./MenuItem";
import AppContext from "../context";
import { Typography, Button } from "@mui/material";
export default function SearchMenu() {
  const { movies, setViewAllMovies } = useContext(AppContext);
  const moviesItems = movies
    ?.slice(0, 10)
    ?.map((movie) => (
      <MenuItem
        title={movie?.title}
        year={movie?.year}
        imdbId={movie.imdb_id}
      />
    ));

  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <MenuList>{moviesItems}</MenuList>
      <Typography align="center">
        total: {movies?.length} {movies?.length > 1 ? "movies" : "movie"} found
        <Button onClick={() => setViewAllMovies(true)}>view all results</Button>
      </Typography>
    </Paper>
  );
}
