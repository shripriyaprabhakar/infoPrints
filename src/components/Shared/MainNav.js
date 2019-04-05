import React from "react";
import { Link } from "react-router-dom";

import "./MainNav.css";

const MainNav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-top">
        <div class="col-md-6 text-md-center">
          <ul className="navbar-nav">
            <li className="nav-item col-sm">
              <Link className="navbar-brand" to="/">
                <p className="display-5 text-danger">Home</p>
              </Link>
            </li>
            <li className="nav-item col-sm">
              <Link className="navbar-brand" to="/authors-articles">
                <p className="display-5 text-danger">AuthorsArt</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default MainNav;
