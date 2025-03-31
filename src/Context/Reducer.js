export const Reducer = (state, action) => {
  const removedFromWatchlist = state.watchList.filter(
    (item) => item.imdbID !== action.id
  );
  const removedFromWatched = state.watched.filter(
    (item) => item.imdbID !== action.id
  );
  switch (action.type) {
    case "ADD_TO_WATCHED":
      return {
        watchList: removedFromWatchlist,
        watched: [...state.watched, action.payload],
      };
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case "MOVE_TO_WATCHED":
      return {
        watched: [...state.watched, action.payload],
        watchList: removedFromWatchlist,
      };
    case "MOVE_TO_WATCHLIST":
      return {
        watched: removedFromWatched,
        watchList: [...state.watchList, action.payload],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: removedFromWatched,
      };
    case "REMOVE_FROM_WATCHELIST":
      return {
        ...state,
        watchList: removedFromWatchlist,
      };

    default: {
      return state;
    }
  }
};
