import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;



















// import React, {useState, useEffect} from 'react'

// const App = () => {
//   const [state, setState] = useState(0);
//   console.log(state);

//   const newSize = () => {
//      setState(state + 1);
//      console.log("new state", state);
//   }

//   useEffect(() => {
//     document.addEventListener("keydown", newSize);
//   }, [])
  
//   return (
//     <div>App</div>
//   )
// }

// export default App;