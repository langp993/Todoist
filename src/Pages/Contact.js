import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from "./Signup";
import Navbar from "../Components/Navbar";
import Navbarlogin from "../Components/Navbarlogin";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Homeicon from "../Images/Homeicon.png";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
};
const center = {
  lat: 52.520008, // default latitude
  lng: 13.404954, // default longitude
};

const Contact = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmK0EKQE5EhLSFKcnwaNEN4qjKO8RAW-I",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <Navbarlogin />;
      <div className="flex grid grid-col-1 items-center justify-center bg-white m-8">
        <p className="my-8 text-2xl font-bold">
          Contact us at our office here <br />
          in Berlin. <br />
          <p className="font-normal text-lg mt-4">
            Customer Service: +49 01613445697 <br />
            Address: Neue Kantstrasse 108, 14057, Berlin, Germany{" "}
          </p>
        </p>
        <GoogleMap
          // classname="py-8"
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={center}
        >
          <Marker position={center} />
          {/* icon={Homeicon} */}
          <Marker position={{ lat: 52.520008, lng: 13.404954 }} />
        </GoogleMap>
      </div>
      <div className="bg-black p-28">
        <p className="flex items-center justify-center text-2xl mx-auto text-white">
          Farfetch App 2024
        </p>
      </div>
    </div>
  );
};

// export default App;

export default Contact;

// export default function Modal() {
//     const [showModal, setShowModal] = React.useState(false);
//     return (
//       <>
//         <button
//           className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="button"
//           onClick={() => setShowModal(true)}
//         >
//           Open regular modal
//         </button>
//         {showModal ? (
//           <>
//             <div
//               className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//             >
//               <div className="relative w-auto my-6 mx-auto max-w-3xl">
//                 {/*content*/}
//                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                   {/*header*/}
//                   <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//                     <h3 className="text-3xl font-semibold">
//                       Modal Title
//                     </h3>
//                     <button
//                       className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                       onClick={() => setShowModal(false)}
//                     >
//                       <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                         ×
//                       </span>
//                     </button>
//                   </div>
//                   {/*body*/}
//                   <div className="relative p-6 flex-auto">
//                     <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                       I always felt like I could do anything. That’s the main
//                       thing people are controlled by! Thoughts- their perception
//                       of themselves! They're slowed down by their perception of
//                       themselves. If you're taught you can’t do anything, you
//                       won’t do anything. I was taught I could do everything.
//                     </p>
//                   </div>
//                   {/*footer*/}
//                   <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                     <button
//                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Close
//                     </button>
//                     <button
//                       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//           </>
//         ) : null}
//       </>
//     );
//   }
