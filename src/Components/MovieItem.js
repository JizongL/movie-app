import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppContext from "../context";

export default function MovieItems({ movies }) {
  const { handleMovieModalClickOpen, openMovieDetails, setOpenMovieDetails } =
    useContext(AppContext);
  console.log({ openMovieDetails });
  return movies?.map((movie) => (
    <ListItem key={movie?.imdb_id} disablePadding>
      <ListItemButton onClick={handleMovieModalClickOpen}>
        <ListItemText
          primary={`Title: ${movie.title}`}
          secondary={`Year: ${movie.year}`}
        />
      </ListItemButton>
    </ListItem>
  ));
}
