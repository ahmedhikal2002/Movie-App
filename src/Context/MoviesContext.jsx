import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const appContext = createContext();

const MoviesContext = ({ children }) => {
  const moviesList = {
    watched: [],
    watchList: [],
  };

  const [state, dispatch] = useReducer(Reducer, moviesList);

  return (
    <appContext.Provider
      value={{
        watched: state.watched,
        watchList: state.watchList,
        dispatch: dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export const useMovies = () => {
  return useContext(appContext);
};

export default MoviesContext;
