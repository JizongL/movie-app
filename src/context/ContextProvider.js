import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [openShowDetails, setOpenShowDetails] = useState(false);
  const [selectedMovieimdb, setSelectedMovieimdb] = useState("");
  const [shows, setShows] = useState([]);
  const [tv, setTv] = useState([]);
  const [search, setSearch] = useState("");
  const [alignment, setAlignment] = React.useState("tv");
  const [viewAllShows, setViewAllShows] = useState(false);
  const handleShowModalClickOpen = () => {
    setOpenShowDetails(true);
  };

  const handleShowModalClose = () => {
    setOpenShowDetails(false);
  };
  const context = {
    openShowDetails,
    setOpenShowDetails,
    handleShowModalClickOpen,
    handleShowModalClose,
    selectedMovieimdb,
    setSelectedMovieimdb,
    shows,
    setShows,
    search,
    setSearch,
    viewAllShows,
    setViewAllShows,
    alignment,
    setAlignment,
    tv,
    setTv,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
