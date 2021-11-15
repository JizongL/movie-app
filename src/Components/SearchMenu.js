import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "./MenuItem";
import AppContext from "../context";
import { Typography, Button } from "@mui/material";
export default function SearchMenu() {
  const { shows, alignment, setViewAllShows } = useContext(AppContext);
  const showsItems = shows
    ?.slice(0, 10)
    ?.map((show) => (
      <MenuItem
        title={show?.title}
        year={alignment === "movies" ? show?.year : show.release_date}
        imdbId={show.imdb_id}
      />
    ));
  function handleSetViewAll() {
    setViewAllShows(true);
  }
  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <MenuList>{showsItems}</MenuList>
      <Typography align="center">
        total: {shows?.length} {shows?.length > 1 ? "movies" : "movie"} found
        <Button onClick={handleSetViewAll}>view all results</Button>
      </Typography>
    </Paper>
  );
}
