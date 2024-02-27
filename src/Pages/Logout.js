import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
import "../App.css";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from "./Signup";
import Navbar from "../Components/Navbar";
import Navbarlogin from "../Components/Navbarlogin";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Homeicon from "../Images/Homeicon.png";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* <Sidemenu /> */}
      {/* <Navbar /> */}
      <Navbarlogin />

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

export default Logout;

//////////////////////////////////////////////

// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "500px",
//   height: "500px",
// };
// const center = {
//   lat: 52.520008, // default latitude
//   lng: 13.404954, // default longitude
// };

// const About = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBmK0EKQE5EhLSFKcnwaNEN4qjKO8RAW-I",
//     libraries,
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div>
//       <Navbarlogin />;
//       <GoogleMap mapContainerStyle={mapContainerStyle} zoom={9} center={center}>
//         <Marker position={center} />
//         {/* icon={Homeicon} */}
//         {/* <Marker position={{ lat: 52.520008, lng: 13.404954 }} /> */}
//       </GoogleMap>
//     </div>
//   );
// };

// // export default App;

// export default About;

///////////////////////////////////////////////////

/* global google */
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import "./App.css";

// const About = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.AIzaSyBmK0EKQE5EhLSFKcnwaNEN4qjKO8RAW - I,
//   });
//   const markers = [
//     { lat: 18.5204, lng: 73.8567 },
//     { lat: 18.5314, lng: 73.8446 },
//     { lat: 18.5642, lng: 73.7769 },
//   ];

//   const onLoad = (map) => {
//     const bounds = new google.maps.LatLngBounds();
//     markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//     map.fitBounds(bounds);
//   };

//   return (
//     <div className="App">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap mapContainerClassName="map-container" onLoad={onLoad}>
//           {markers.map(({ lat, lng }) => (
//             <Marker position={{ lat, lng }} />
//           ))}
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default About;
