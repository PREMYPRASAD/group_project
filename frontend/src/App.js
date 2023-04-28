import './App.css';
import About from './Components/About/About';
import Contact from './Components/contact/contact';
import Home from './Components/Home/Home';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
    
          
    <Navbar/>
  < Home/> 
  <About/>
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
