import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import MovieItems from "./MovieItem";

export default function MovieList({ movies, handleClickOpen }) {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <MovieItems handleClickOpen={handleClickOpen} movies={movies} />
        </List>
      </nav>
    </Box>
  );
}
