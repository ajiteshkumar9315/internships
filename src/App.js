import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar2 from './component/Navbar2';
import Home from './component/Home';
import User from './component/User';
import About from './component/About';

function App() { 
  return (
    <>
    <Router>
      <Navbar2/>
    <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/user" element={<User/>}>
          </Route>
        </Routes>
    </Router>
        
    </>
  );
}

export default App;
