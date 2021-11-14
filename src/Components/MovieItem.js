import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
export default function MovieItems({ movies }) {
  return movies?.map((movie) => (
    <ListItem key={movie?.imdb_id} disablePadding>
      <ListItemButton>
        <ListItemText
          primary={`Title: ${movie.title}`}
          secondary={`Year: ${movie.year}`}
        />
      </ListItemButton>
    </ListItem>
  ));
}
