import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AppContext from "../context";
export default function MenuItems({ title, year, imdbId }) {
  const { handleShowModalClickOpen, setSelectedMovieimdb } =
    useContext(AppContext);

  function handleShowItemClick(e, imdbId) {
    handleShowModalClickOpen();
    setSelectedMovieimdb(imdbId);
  }
  return (
    <MenuItem key={imdbId} onClick={(e) => handleShowItemClick(e, imdbId)}>
      <ListItemIcon>
        <LocalMoviesIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={title} secondary={year}></ListItemText>
      <Typography variant="body2" color="text.secondary">
        ...
      </Typography>
    </MenuItem>
  );
}
