import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ShowsItems from "./ShowsItem";

export default function ShowsList() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ShowsItems />
        </List>
      </nav>
    </Box>
  );
}
