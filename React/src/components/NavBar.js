import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul className="nav nav-tabs nav-stacked">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/enterproduct" className="nav-link">
            Insert Product
          </Link>
        </li>
        <li className="nav-item disabled">
          <Link to="/editproduct" className="nav-link">
            Edit Product
          </Link>
        </li>
        <li className="nav-item disabled">
          <Link to="/getcart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
