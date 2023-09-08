import Navbar from './components/navbar';
import './App.css';
import {BrowserRoutes , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRoutes>
    <div>
        <Navbar />
    </div></BrowserRoutes>
    
 
  );
}

export default App;
