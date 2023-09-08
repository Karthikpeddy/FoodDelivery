import Navbar from './components/navbar';
import './App.css';
import {BrowserRoutes , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRoutes>
      <Routes>
        <Route path='/' element={ <div>
          <Navbar />
        </div> }></Route>
      </Routes>
        
    </BrowserRoutes>
    
 
  );
}

export default App;
