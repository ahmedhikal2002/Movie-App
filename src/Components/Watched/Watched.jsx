import { useMovies } from "../../Context/MoviesContext";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

const Watched = () => {
  const { watched } = useMovies();

  return (
    <>
      <MoviesContainer items={watched} />
    </>
  );
};

export default Watched;
