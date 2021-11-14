import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [openMovieDetails, setOpenMovieDetails] = useState(false);

  const handleMovieModalClickOpen = () => {
    console.log("ran open");
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
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
