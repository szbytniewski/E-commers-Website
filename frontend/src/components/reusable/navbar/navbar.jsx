import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ change }) {
  const [activeLink, setActiveLink] = useState(change);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <ul className="fixed bottom-0 left-0 right-0 bg-body p-4 flex justify-around font-body">
      <li
        className={`py-2 ${
          activeLink === "/shop"
            ? "bg-text text-body transition-all duration-300"
            : "bg-body text-text hover:bg-text hover:text-body transition-all duration-300"
        }`}
      >
        <Link
          to="/shop"
          onClick={() => handleLinkClick("/shop")}
          className={`transition-all duration-300`}
        >
          shop
        </Link>
      </li>
      <li
        className={`py-2 ${
          activeLink === "/sizing"
            ? "bg-text text-body transition-all duration-300"
            : "bg-body text-text hover:bg-text hover:text-body transition-all duration-300"
        }`}
      >
        <Link
          to="/sizing"
          onClick={() => handleLinkClick("/sizing")}
          className={`transition-all duration-300`}
        >
          sizing
        </Link>
      </li>
      <li
        className={`py-2 ${
          activeLink === "/shipping"
            ? "bg-text text-body transition-all duration-300"
            : "bg-body text-text hover:bg-text hover:text-body transition-all duration-300"
        }`}
      >
        <Link
          to="/shipping"
          onClick={() => handleLinkClick("/shipping")}
          className={`transition-all duration-300`}
        >
          shipping
        </Link>
      </li>
      <li
        className={`py-2 ${
          activeLink === "/contact"
            ? "bg-text text-body transition-all duration-300"
            : "bg-body text-text hover:bg-text hover:text-body transition-all duration-300"
        }`}
      >
        <Link
          to="/contact"
          onClick={() => handleLinkClick("/contact")}
          className={`transition-all duration-300`}
        >
          contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
