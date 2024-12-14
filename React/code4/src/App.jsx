import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Cards from "./components/Cards";
import { Hero } from "./components/Hero";

function App() {
  let value =
    "React props (short for  are a fundamental concept in React forpassing data from parent components to child components. Heres a conciseoverview of props in React:";

  let value1 =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet vel adipisci beatae voluptatem ex modi, minima fuga possimus, magnam velit iste cum harum nulla similique eligendi ratione error. Quaerat.";

  let image =
    "https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid";
  let image1 =
    "https://img.freepik.com/premium-vector/big-data-flow-processing-concept-cloud-database_122058-448.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid";
  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center justify-content-lg-around gap-2 mt-3">
        <Cards title="React with gym" description={value} imgPics={image} />
        <Cards title="React logo" description={value1} imgPics={image1} />
        <Cards title="React.js" description={value} imgPics={image} />
      </div>

      <Hero headingName="React js" heading2="Hello" />
      <Hero headingName="Hero section" />
      {/* <Hero /> */}
    </>
  );
}

export default App;
