import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppContext from "../context";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ListItemIcon from "@mui/material/ListItemIcon";
export default function MovieItems() {
  const { shows, alignment, handleShowModalClickOpen, setSelectedMovieimdb } =
    useContext(AppContext);

  function handleMovieItemClick(e, imdb) {
    handleShowModalClickOpen();
    setSelectedMovieimdb(imdb);
  }

  return shows?.map((show) => (
    <ListItem key={show?.imdb_id} disablePadding>
      <ListItemIcon>
        <LocalMoviesIcon fontSize="small" />
      </ListItemIcon>
      <ListItemButton onClick={(e) => handleMovieItemClick(e, show.imdb_id)}>
        <ListItemText
          primary={`Title: ${show.title}`}
          secondary={`Year: ${
            alignment === "movies" ? show.year : show.release_date
          }`}
        />
      </ListItemButton>
    </ListItem>
  ));
}
