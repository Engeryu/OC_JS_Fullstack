import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import logoWhite from "../../logo-white.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoWhite} alt="Kasa" />
        </Link>

        <p>&copy; 2022 Kasa. Tous droits réservés</p>
      </footer>
    );
  }
}

export default Footer;
