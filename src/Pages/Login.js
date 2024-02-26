// // import React, { useState } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../Firebase";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import auth from "../Firebase";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         navigate("/login");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };

//   return (
//     <main>
//       <section>
//         <div>
//           <div>
//             <h1> FocusApp </h1>
//             <form>
//               <div>
//                 <label htmlFor="email-address">Email address</label>
//                 <input
//                   type="email"
//                   label="Email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder="Email address"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   label="Create password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   placeholder="Password"
//                 />
//               </div>

//               <button type="submit" onClick={onSubmit}>
//                 Sign up
//               </button>
//             </form>

//             <p>
//               Already have an account? <NavLink to="/login">Sign in</NavLink>
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Signup;

////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import Homeicon from "../Images/Homeicon.png";
import Navbar from "../Components/Navbar";
import Navbarlogin from "../Components/Navbarlogin";

import Footer from "../Components/Footer";
import auth from "../Firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/Logout");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode == "auth/email-already-in-use") {
          alert("Email already in use");
        }
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          {/* <Navbar /> */}
          <Navbarlogin />

          <div className="bg-white flex grid grid-cols-1 items-center justify-center w-80 m-auto mt-14 p-4">
            <h1 className="m-auto font-bold text-3xl">PLEASE LOGIN</h1>
            <form>
              <div className="my-8 grid grid-cols-1">
                <label htmlFor="email-address">Email address</label>
                <input
                  className="mt-5 px-5 h-10 rounded-md"
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="my-8 grid grid-cols-1">
                <label htmlFor="password">Password</label>
                <input
                  className="mt-5 px-5 h-10 rounded-md"
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password (Min 8 Characters)"
                />
              </div>

              <button
                type="submit"
                onClick={onSubmit}
                className="text-white flex items-center justify-center mx-auto my-10 bg-green-400 p-4 w-60 rounded-lg"
              >
                Login
              </button>
            </form>

            <p className="m-auto text-blue-500">
              <NavLink to="/Signup"> Don't have an account? Sign Up</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
