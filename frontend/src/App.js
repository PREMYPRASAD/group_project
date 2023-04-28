import './App.css';
import About from './Components/About/About';
import Contact from './Components/contact/contact';
import Home from './Components/Home/Home';
import Navbar from './Navbar/Navbar';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Navbar/> 
      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/contactus" element={<Contact/>} />
   
      </Routes>
        
             </div>

  );
}
export default App;
