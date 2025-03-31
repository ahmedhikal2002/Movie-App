import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchInput from "./Components/SearchInput/SearchInput.jsx";
import Watched from "./Components/Watched/Watched.jsx";
import WatchList from "./Components/WatchList/WatchList.jsx";
import MoviesContext from "./Context/MoviesContext.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <WatchList /> },
      { path: "add", element: <SearchInput /> },
      { path: "watched", element: <Watched /> },
      { path: "watchlist", element: <WatchList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesContext>
      <RouterProvider router={routes} />
    </MoviesContext>
  </React.StrictMode>
);
