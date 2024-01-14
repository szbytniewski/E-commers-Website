import React from "react";
import { Link } from "react-router-dom";

export default function MenuLinks() {
  return (
    <nav className="text-text">
      <ul className="flex flex-col items-center border border-border p-2 space-y-2 w-50  bg-body">
        <li className="mb-2">
          <Link
            to="/shop"
            className="hover:bg-text hover:text-body px-2 py-1 text-center text-sm font-body"
          >
            shop
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/sizing"
            className="hover:bg-text hover:text-body px-2 py-1 text-center text-sm font-body"
          >
            sizing
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/shipping"
            className="hover:bg-text hover:text-body px-2 py-1 text-center text-sm font-body"
          >
            shipping
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:bg-text hover:text-body px-2 py-1 text-center text-sm font-body"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
