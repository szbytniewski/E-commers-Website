import React from "react";
import { Link } from "react-router-dom";

export default function MenuLinks() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="/sizing">sizing</Link>
        </li>
        <li>
          <Link to="/shipping">shipping</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
