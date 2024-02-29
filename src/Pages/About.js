import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
import "../App.css";
import { useState, useEffect } from "react";

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
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <Footer />
    </div>
  );
}

export default About;

///////////////////////////////////////////////////////////////////

// Testing this function at the moment !!

//REVIEW in order to have a single product page you need..in the component Prodctidetails..
//1. create a route with a path to the desired url, something like "products/:id" =>review spike about router
//2.in that route you have to render the compoonent ProductDetails (again, inside router spike) .
//3. in your home, the Link should point to the path of ProductDetails component, adding the variable with the id of the product.
//4. INSIDE ProductDetails component, we need to :
//4.1: create a state variable that will store the info for that product
//4.2 use the useParams hook to extract the product id from the url
//4,3, build a fetch function that uses the id extracted with in 4.3 and uses it to fetch that product
//4.4: set the state variable with the result of the fetch
//4.5: use an useEffect to run the fetch function when the component is loaded
//4.6 render in the JSX whatever info about that product you want

// const thisProduct = fetchData.find((fetchData) => fetchData.id === price);

///////////////////////////////////////////////////////////////////

// function About() {
//   const { id } = useParams();

//   const fetchSingleProduct = async () => {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//   };
//   return (
//     <div>
//       <p>Price: ${fetchSingleProduct.price}</p>
//       <p>{fetchSingleProduct.category}</p>
//     </div>
//   );
// }

// export default About;

///////////////////////////////////////////////////////////////////

// function About({ data }) {
//   const { price } = useParams();

//   return (
//     <>
//       <section className="card-wrappertutorial">
//         <div className="card-containertutorial">
//           {data
//             .filter((fetchData) => fetchData.price === price)
//             .map((fetchData) => (
//               <div className="card-info" key={fetchData.id}>
//                 <h2>{fetchData.price}</h2>
//                 {/* <p>{fetchData.description}</p> */}
//               </div>
//             ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default About;
