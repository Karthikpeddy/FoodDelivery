import Navbar from "./components/navbar";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
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
