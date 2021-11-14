import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [openMovieDetails, setOpenMovieDetails] = useState(false);
  const [selectedMovieimdb, setSelectedMovieimdb] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [viewAllMovies, setViewAllMovies] = useState(false);
  const handleMovieModalClickOpen = () => {
    setOpenMovieDetails(true);
  };

  const handleMovieModalClose = () => {
    setOpenMovieDetails(false);
  };
  const context = {
    openMovieDetails,
    setOpenMovieDetails,
    handleMovieModalClickOpen,
    handleMovieModalClose,
    selectedMovieimdb,
    setSelectedMovieimdb,
    movies,
    setMovies,
    search,
    setSearch,
    viewAllMovies,
    setViewAllMovies,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
