 
import './App.css';

import { Route , Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Clones from './Pages/Clones'
// import Demo from './Pages/Demo'
import Tools from './Pages/Tools'
import APIs from './Pages/APIs'
import Contact from './Pages/Findme'
// import Findme from "./Pages/Findme"
 


function App() {
  return (
    <div className="App">
      <Routes> 
      <Route path="/" element={ <Home/> } />
        <Route path="/cloneworld" element={ <Clones/> } />
        {/* <Route path="/demo" element={ <Demo/> } /> */}
        <Route path="/tools" element={ <Tools/> } />
        <Route path="/apis" element={ <APIs/> } />
        <Route path="/contact" element={ <Contact/> } />
        
        
       </Routes>
  
      
    </div>
  );
}

export default App;
