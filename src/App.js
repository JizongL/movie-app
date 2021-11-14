import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";
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
