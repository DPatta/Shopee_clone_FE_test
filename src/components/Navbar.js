import React from "react";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Flash Sale</li>
          <li>Top Products</li>
        </ul>
      </div>
    </nav>
  );
}
