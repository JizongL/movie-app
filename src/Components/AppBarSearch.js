import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchMenu from "./SearchMenu";
import AppContext from "../context";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "600px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "600px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "600px",
    [theme.breakpoints.up("sm")]: {
      width: "600px",
      "&:focus": {
        width: "600px",
      },
    },
  },
}));

export default function AppBarSearch({ handleInputOnChange }) {
  const { search, viewAllMovies } = useContext(AppContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#2E3B55" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0.4, display: { xs: "none", sm: "block" } }}
          >
            Menu
          </Typography>
          <Search onChange={handleInputOnChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              data-testid="search-input"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {search !== "" && !viewAllMovies && (
        <div data-testid="search-menu">
          <SearchMenu />
        </div>
      )}
    </Box>
  );
}
