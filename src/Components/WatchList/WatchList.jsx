import { useMovies } from "../../Context/MoviesContext";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

const WatchList = () => {
  const { watchList } = useMovies();
  return (
    <>
      <MoviesContainer items={watchList} />
    </>
  );
};

export default WatchList;
