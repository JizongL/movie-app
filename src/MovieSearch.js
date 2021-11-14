import React, { useEffect, useState } from "react";
import { Input, Container, Grid } from "@mui/material";
import { movieSearchResultMap } from "./helpers";
import axios from "axios";
const URL_TEMP = "http://localhost:5000";
export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  async function getSearch() {
    // const response = await axios.get('/search?title="matrix"');
    const response = await axios.get(`${URL_TEMP}/search?title=${search}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    setMovies(response?.data?.movie_results);
  }

  useEffect(() => {
    getSearch();
  }, [search]);
  function handleInputOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Input onChange={handleInputOnChange} />
      <ul className="users">{movieSearchResultMap(movies)}</ul>
    </div>
  );
}
