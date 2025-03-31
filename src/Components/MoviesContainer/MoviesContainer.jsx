import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./MoviesContainer.css";
import { useLocation } from "react-router-dom";
import { useMovies } from "../../Context/MoviesContext";

function MoviesContainer({ items }) {
  const { dispatch, watched, watchList } = useMovies();
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  return (
    <>
      <div className="movies-list">
        <h3>{` my ${pathName === "watched" ? "watched" : "watchlist"}`}</h3>
        <span className="btn">
          {pathName === "watched" ? watched.length : watchList.length} movies
        </span>
      </div>

      <div className="container">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.imdbID}>
              <div className="poster">
                <img src={item.Poster} />
                <div className="icons">
                  {pathName === "watched" ? (
                    <>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_WATCHED",
                            id: item.imdbID,
                          })
                        }
                      />
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={() =>
                          dispatch({
                            type: "MOVE_TO_WATCHLIST",
                            id: item.imdbID,
                            payload: item,
                          })
                        }
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_WATCHELIST",
                            id: item.imdbID,
                          })
                        }
                      />
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={() =>
                          dispatch({
                            type: "MOVE_TO_WATCHED",
                            id: item.imdbID,
                            payload: item,
                          })
                        }
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <span> No movies in your list,add some !</span>
        )}
      </div>
    </>
  );
}

export default MoviesContainer;
