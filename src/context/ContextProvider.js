import React, { useState } from "react";
import AppContext from ".";
import Config from "../config";
require("dotenv").config();

const { NODE_ENV } = process.env;
const URL = NODE_ENV === "production" ? Config.dockerRunApi : Config.devApiUrl;

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
    URL,
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
