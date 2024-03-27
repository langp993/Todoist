import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-black px-10 p-5 flex">
//       <button
//         className="bg-white w-12 h-12 text-white rounded-3xl shadow-md flex items-center justify-center "
//         onClick={() => navigate("/")}
//       >
//         <img src={Homeicon} alt="React Image" className="w-12 h-12" />
//       </button>

//       <h1 className="flex items-center justify-center justify-between text-2xl text-white m-auto font-bold">
//         FARFETCH
//       </h1>

//       <Link
//         to="/login"
//         className="flex items-center px-6 justify-between p-2 bg-green-400 text-white rounded-lg shadow-md"
//       >
//         <h1 className="">Login</h1>
//       </Link>
//     </div>
//   );
// };

///////

// function Car(props) {
//   return <li className="bg-green-200 p-5 m-5">Buy {props.brand}</li>;
// }

// function List() {
//   const cars = ["Bananas", "Oranges", "Strawberrys"];
//   return (
//     <>
//       <h1 className="font-bold text-2xl">To Do List</h1>
//       <h1 className="font-bold">Groceries</h1>

//       <ul className="p-5">
//         {cars.map((car) => (
//           <Car brand={car} />
//         ))}
//       </ul>
//     </>
//   );
// }

//////

// function Car(props) {
//   return <li className="bg-green-200 p-5 m-5">I am a {props.brand}</li>;
// }

// function List() {
//   const cars = [
//     { id: 1, brand: "Ford" },
//     { id: 2, brand: "BMW" },
//     { id: 3, brand: "Audi" },
//   ];
//   return (
//     <>
//       <h1 className="font-bold text-2xl">To Do List</h1>
//       <h1>Groceries</h1>

//       <ul>
//         {cars.map((car) => (
//           <Car key={car.id} brand={car.brand} />
//         ))}
//       </ul>
//     </>
//   );
// }

///////!SECTION

function List(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;
