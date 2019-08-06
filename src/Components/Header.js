import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar justify-content-center">
      <li classnName="nav-item nav-link">
        <Link to="/">Top Games</Link>
      </li>
      <li classnName="nav-item nav-link">
        <Link to="/top-streams">Top Live Streams</Link>
      </li>
    </nav>
  );
}

export default Header;
