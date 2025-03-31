import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">Movies</NavLink>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="watchlist">WatchList</Link>
          </li>
          <li>
            <Link to="watched">Watched</Link>
          </li>
          <li>
            <button className="btn">
              <Link to="add">Add</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
