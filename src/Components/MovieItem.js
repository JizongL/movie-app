import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppContext from "../context";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ListItemIcon from "@mui/material/ListItemIcon";
export default function MovieItems({ movies }) {
  const { handleMovieModalClickOpen, setSelectedMovieimdb } =
    useContext(AppContext);

  function handleMovieItemClick(e, imdb) {
    handleMovieModalClickOpen();
    setSelectedMovieimdb(imdb);
  }

  return movies?.map((movie) => (
    <ListItem key={movie?.imdb_id} disablePadding>
      <ListItemIcon>
        <LocalMoviesIcon fontSize="small" />
      </ListItemIcon>
      <ListItemButton onClick={(e) => handleMovieItemClick(e, movie.imdb_id)}>
        <ListItemText
          primary={`Title: ${movie.title}`}
          secondary={`Year: ${movie.year}`}
        />
      </ListItemButton>
    </ListItem>
  ));
}
