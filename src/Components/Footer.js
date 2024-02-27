import React from "react";
import Logout from "../Pages/Logout";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      {/* <p>Shopping App 2024</p> */}
      <Link
        to="/Contact"
        className="flex items-center m-auto px-20 justify-between p-2 bg-green-400 text-white rounded-lg shadow-md m-8"
      >
        <h1 className="">Contact Us</h1>
      </Link>
    </div>
  );
};

export default Footer;
