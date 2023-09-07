import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Restaurants />
      <Contact />
    </div>
  );
}

export default App;
