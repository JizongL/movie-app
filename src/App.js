import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./Components/MovieSearch";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieSearch />}></Route>
      </Routes>
    </Router>
  );
}
