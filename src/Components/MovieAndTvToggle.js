import React, { useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AppContext from "../context";
export default function MovieAndTvToggle() {
  const { alignment, setAlignment } = useContext(AppContext);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="movies">Movies</ToggleButton>
      <ToggleButton value="tv">TV Shows</ToggleButton>
    </ToggleButtonGroup>
  );
}
