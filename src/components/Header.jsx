import { useState } from "react";
import useFetch from "../useFetch";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-danger">
            MeetMosaic
          </NavLink>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by title and tags"
              aria-label="Search"
              name="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />

            <NavLink
              className="btn btn-outline-success"
              to={searchQuery === "" ? "#" : `/search-details/${searchQuery}`}
            >
              Search
            </NavLink>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;
