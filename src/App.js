
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './loginpage';
import Signuppage from './signpage';
import Home from './homepage';
import Program from './program';
import Header from './header';
import About from './about';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Header/>
    
    
      <Routes>
      <Route path='/' element={<Signuppage/>}></Route>
      
      <Route path='homepage' element={<Home/>}></Route>

      <Route path='program' element={<Program/>}></Route>
      <Route path='about' element={<About/>}>
      </Route>
        <Route path='loginpage' element={<Loginpage/>}></Route>
        
      </Routes>
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
