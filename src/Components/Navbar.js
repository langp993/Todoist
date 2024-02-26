import React from "react";
import "../App.css";
import Homeicon from "../Images/Homeicon.png";
// import { NavLink, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black px-10 p-5 flex">
      <button
        className="bg-white w-12 h-12 text-white rounded-3xl shadow-md flex items-center justify-center "
        onClick={() => navigate("/")}
      >
        <img src={Homeicon} alt="React Image" className="w-12 h-12" />
      </button>

      <h1 className="flex items-center justify-center justify-between text-2xl text-white m-auto font-bold">
        FARFETCH
      </h1>

      <Link
        to="/login"
        className="flex items-center px-6 justify-between p-2 bg-green-400 text-white rounded-lg shadow-md"
      >
        <h1 className="">Login</h1>
      </Link>
    </div>

    // <div className="bg-black m-auto flex p-4">
    //   <h1 className="flex items-center justify-center justify-between text-2xl text-white m-auto font-bold">
    //     FARFETCH
    //   </h1>
    // </div>
  );
};

export default Navbar;
