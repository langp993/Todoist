import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="flex grid grid-cols-1 items-center justify-center mt-0 bg-white p-8">
      {/* <Link
        to="/about"
        className="flex items-center m-auto px-20 justify-center justify-between p-2 bg-yellow-500 text-white rounded-lg shadow-md m-8"
      >
        <h1>Menu</h1>
      </Link>
      <Link
        to="/about"
        className="flex items-center m-auto px-20 justify-between p-2 bg-yellow-500 text-white rounded-lg shadow-md m-8"
      >
        <h1>Checkout</h1>
      </Link> */}

      {/* <Link
        to="/about"
        className="flex items-center m-auto mb-8 px-20 justify-between p-2 bg-yellow-500 text-white rounded-lg shadow-md m-8"
      >
        <h1 className="">About</h1>
      </Link> */}

      {/* <Link
        to="/login"
        className="flex items-center m-auto px-20 justify-between p-2 bg-yellow-500 text-white rounded-lg shadow-md m-8"
      >
        <h1 className="">Login</h1>
      </Link> */}
    </div>
  );
};

export default SubNavbar;
