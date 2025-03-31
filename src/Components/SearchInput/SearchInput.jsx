import { useEffect, useState } from "react";
import "./SearchInput.css";
import Movie from "../Movie/Movie";
function SearchInput() {
  const [searchInput, setSerachInput] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getMovies = async () => {
        if (searchInput) {
          const data = await fetch(
            `https://www.omdbapi.com/?s=${searchInput}&apikey=d3e36774`
          );
          const res = await data.json();
          setMovies(res.Search);
        }
      };
      getMovies();
    } catch (error) {
      alert(error.message);
    }
  }, [searchInput]);

  return (
    <main className="main">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search For a Movie"
          value={searchInput}
          onChange={(e) => setSerachInput(e.target.value)}
        />
      </form>
      <>
        {movies && movies.length > 0
          ? movies.map((movie) => <Movie key={movie.imdbID} item={movie} />)
          : ""}
      </>
    </main>
  );
}

export default SearchInput;
