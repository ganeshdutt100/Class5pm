import "./App.css";
import Cards from "./components/Cards";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="d-flex">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default App;
