// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB079zUTdspu4EWQvUSE5G9yIEXQ9jN7w",
  authDomain: "fakestore-2a805.firebaseapp.com",
  projectId: "fakestore-2a805",
  storageBucket: "fakestore-2a805.appspot.com",
  messagingSenderId: "808419613622",
  appId: "1:808419613622:web:668cbb88ef12821598bf17",
  measurementId: "G-2TXMJ7S2BN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;

/////////////////////////////////////////////////////////////////////////////////

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDR59r12b7CjzTa4_NtiZT7fn-mHWgyYhI",
//   authDomain: "testing-e8727.firebaseapp.com",
//   projectId: "testing-e8727",
//   storageBucket: "testing-e8727.appspot.com",
//   messagingSenderId: "64713902852",
//   appId: "1:64713902852:web:d3eae05df8345cff3d5e51",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// export default auth;
