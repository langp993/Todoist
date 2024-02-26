import logo from "../logo.svg";
import "../App.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import Sidemenu from "../Components/Sidemenu";
import Search from "../Components/Search";
import About from "./About";
import Products from "./Products";
import Signup from "./Signup";
import auth from "../Firebase";

import React, { useState, useEffect } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  console.log("auth", auth);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([]);

  const api = "https://fakestoreapi.com/products";

  function handleSearch(e) {
    const searchValue = e.target.value;
    // console.log("searchValue", searchValue);
    setSearch(searchValue);
  }

  const filteredData = fetchedData.filter((singleProduct) => {
    // console.log(
    //   "singleProduct title in small letterst",
    //   singleProduct.title.toLowerCase()
    // );

    return singleProduct.category.toLowerCase().includes(search.toLowerCase());
  });
  console.log("filteredData", filteredData);
  // console.log("search value =", search, "screen items =", fetchedData);

  const getProducts = async () => {
    let data = await fetch(api).then((res) => res.json());
    console.log("data>>", data);
    // setIsLoading(false);
    setFetchedData(data);
  };

  useEffect(() => {
    getProducts();
  }, [api]);

  console.log(search);

  return (
    <div className="Home">
      <Navbar />
      {/* <SubNavbar /> */}

      <div className="flex justify-center bg-blue-200 p-4">
        <form className="bg-blue-100 p-2 shadow-xl rounded-lg mt-0 text-black">
          <input
            onChange={(e) => {
              handleSearch(e);
            }}
            className="text-center w-60 h-10 mx-8 w-50 sm:w-80 rounded-md bg-blue-100 font-bold text-black"
            placeholder="Search by Category e.g. Jewelery"
            type="text"
          ></input>
        </form>
      </div>
      {/* {isLoading && <h1>....LOADING.....</h1>} */}

      <div className="p-4 grid grid-cols-1 xl:grid-cols-4 gap-4 bg-white">
        {filteredData.map((fetchData) => (
          // <Link to="/about">
          // <Link to={`/about/${fetchData.id}`}>
          <div key={fetchData.id} className="card">
            <img src={fetchData.image} alt="" />
            <div className="card-description">
              <h1 className="text-3xl font-bold uppercase mb-4">
                {fetchData.category}
              </h1>
              <h3>{fetchData.title}</h3>
              <h4 className="font-bold my-4">
                {fetchData.price} Euro, inkl. MwSt, zzgl. Versand
              </h4>
            </div>

            <div className="bg-white">
              <button className="bg-black  w-60 h-14 text-white rounded-lg shadow-md m-8">
                Buy
              </button>
            </div>
          </div>
          // </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
