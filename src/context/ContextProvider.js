import React, { useContext, useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [openMovieDetails, setOpenMovieDetails] = useState(false);
  const [selectedMovieimdb, setSelectedMovieimdb] = useState("");
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
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
