import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Cards from "./components/Cards";

function App() {
  let value =
    "React props (short for  are a fundamental concept in React forpassing data from parent components to child components. Heres a conciseoverview of props in React:";

  let value1 =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet vel adipisci beatae voluptatem ex modi, minima fuga possimus, magnam velit iste cum harum nulla similique eligendi ratione error. Quaerat.";
  return (
    <>
      <Navbar />
      <Cards title="React with gym" description={value} />
      <Cards title="React logo" description={value1} />
      <Cards title="React.js" description={value} />
    </>
  );
}

export default App;
