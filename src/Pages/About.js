import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
import "../App.css";
import { useState, useEffect } from "react";

import Login from "./Signup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

// export default function About() {
//   const [fetchedData, setFetchedData] = useState([]);

//   async function getProducts() {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     setProducts(data.products);
//   }

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="flex flex-col justify-center bg-gray-100">
//       <div className="flex justify-between items-center px-20 py-5">
//         <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
//           Shop
//         </h1>
//         <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
//           Cart
//         </h1>
//       </div>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-lg px-10 py-10"
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="rounded-md h-48"
//             />
//             <div className="mt-4">
//               <h1 className="text-lg uppercase font-bold">{product.title}</h1>
//               <p className="mt-2 text-gray-600 text-sm">
//                 {product.description.slice(0, 40)}...
//               </p>
//               <p className="mt-2 text-gray-600">${product.price}</p>
//             </div>
//             <div className="mt-6 flex justify-between items-center">
//               <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////

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
