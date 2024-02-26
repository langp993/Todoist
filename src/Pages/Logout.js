import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
import "../App.css";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from "./Signup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* <Sidemenu /> */}
      <Navbar />

      <button
        className="bg-green-500 w-60 h-12 text-white rounded-lg shadow-md flex items-center justify-center m-auto my-20  "
        onClick={() => navigate("/Login")}
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default About;
