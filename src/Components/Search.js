import Home from "../Pages/Home";
import React, { useState } from "react";

const Search = () => {
  return (
    <div className="Searchbar-container">
      <form className="Searchbar">
        <input
          className="input"
          placeholder="Search by Category"
          type="text"
        ></input>
        <button className="Searchbutton">Search</button>
      </form>
    </div>
  );
};

export default Search;
