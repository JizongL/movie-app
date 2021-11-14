import React, { useEffect, useState } from "react";
import axios from "axios";
const URL_TEMP = "http://localhost:5000/search?title=%22matrix%22";
export default function MovieSearch() {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  async function getSearch() {
    // const response = await axios.get('/search?title="matrix"');
    const response = await axios.get(URL_TEMP, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    setMovies(response?.data?.movie_results);
  }

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <div>
      <ul className="users">
        {movies?.map((movie) => (
          <li key={movie.imdb_id} className="user">
            <p>
              <strong>Title:</strong> {movie.title}
            </p>
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Imbd_id:</strong> {movie.imdb_id}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
