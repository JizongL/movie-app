import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppContext from "../context";

export default function MovieItems({ movies }) {
  const { handleMovieModalClickOpen, setSelectedMovieimdb } =
    useContext(AppContext);

  function handleMovieItemClick(e, imdb) {
    console.log({ imdb });
    handleMovieModalClickOpen();
    setSelectedMovieimdb(imdb);
  }

  return movies?.map((movie) => (
    <ListItem key={movie?.imdb_id} disablePadding>
      <ListItemButton onClick={(e) => handleMovieItemClick(e, movie.imdb_id)}>
        <ListItemText
          primary={`Title: ${movie.title}`}
          secondary={`Year: ${movie.year}`}
        />
      </ListItemButton>
    </ListItem>
  ));
}
