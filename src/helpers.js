export function movieSearchResultMap(movies) {
  return movies?.map((movie) => (
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
  ));
}
