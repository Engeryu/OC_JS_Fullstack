import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="headerNav">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Kasa" />
        </Link>

        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                className="header-link"
                activeClassName="active-link"
                exact
                to="/"
              >
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink
                className="header-link"
                activeClassName="active-link"
                to="/a-propos"
              >
                &Agrave; propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
