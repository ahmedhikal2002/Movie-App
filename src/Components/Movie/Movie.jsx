/* eslint-disable react/prop-types */
import "./Movies.css";
import { useMovies } from "../../Context/MoviesContext";
function Movie({ item }) {
  const { dispatch } = useMovies();
  const { watched, watchList } = useMovies();
  const inWatched = watched.find((film) => film.imdbID === item.imdbID);
  const inWatclist = watchList.find((film) => film.imdbID === item.imdbID);
  console.log(inWatched, inWatclist);
  const disableWatched = inWatched;
  const disabledWatchlist = inWatclist;

  return (
    <div className="movies">
      <div className="poster">
        <img src={item.Poster} alt={item.Title} />
      </div>
      <div className="movie-details">
        <div className="movie-titles">
          <h4>{item.Title}</h4>
          <strong>{item.Year}</strong>
          <span>{item.Type}</span>
        </div>

        <div className="btn-container">
          <button
            className="btn"
            onClick={() =>
              dispatch({
                type: "MOVE_TO_WATCHLIST",
                id: item.imdbID,
                payload: item,
              })
            }
            disabled={disabledWatchlist || disableWatched}
          >
            Add To Wahtchlist
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "MOVE_TO_WATCHED",
                id: item.imdbID,
                payload: item,
              })
            }
            className="btn"
            disabled={disableWatched}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
