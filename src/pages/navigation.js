import React from "react";
import { Link } from "@reach/router";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/making-shapes-with-svg">Making shapes with SVG</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
