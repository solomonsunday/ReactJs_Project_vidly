import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-brand">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customer" className="nav-link">
              Customer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rentals" className="nav-link">
              Rentals
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
