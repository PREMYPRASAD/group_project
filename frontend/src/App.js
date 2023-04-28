import './App.css';

import Contact from './Components/contact/contact';
import Home from './Components/Home/Home';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
  < Home/> 
        <Contact/>
        
      {/* <Routes>
    
          <Route path="/contactus" element={</>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={< />} />
   
      </Routes> */}
        
             </div>

  );
}
export default App;
