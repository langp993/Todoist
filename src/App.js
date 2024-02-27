import React, { useState, useEffect } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import SubNavbar from "./Components/SubNavbar";
// import Sidemenu from "./Components/Sidemenu";
// import Search from "./Components/Search";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Logout from "./Pages/Logout";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/About/:id" element={<About />}> */}
          <Route path="/Products" element={<Products />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
