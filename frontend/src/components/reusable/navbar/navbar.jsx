import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ change }) {
  const [activeLink, setActiveLink] = useState(change);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <ul>
      <li
        style={{ background: activeLink === "/shop" ? "lightblue" : "white" }}
      >
        <Link to="/shop" onClick={() => handleLinkClick("/shop")}>
          shop
        </Link>
      </li>
      <li
        style={{ background: activeLink === "/sizing" ? "lightblue" : "white" }}
      >
        <Link to="/sizing" onClick={() => handleLinkClick("/sizing")}>
          sizing
        </Link>
      </li>
      <li
        style={{
          background: activeLink === "/shipping" ? "lightblue" : "white",
        }}
      >
        <Link to="/shipping" onClick={() => handleLinkClick("/shipping")}>
          shipping
        </Link>
      </li>
      <li
        style={{
          background: activeLink === "/contact" ? "lightblue" : "white",
        }}
      >
        <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
          contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
