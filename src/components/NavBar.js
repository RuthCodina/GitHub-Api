import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
        <span className="navbar-brand">Navbar</span>
        <div className="navbar-nav me-auto">
          <Link to="/" className="nav-link">
            Search
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
