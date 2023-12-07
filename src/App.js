import './App.css';
import '../src/Responsiveness.css';
import Home from './components/Home';
import Homedecor from './components/routescomponents/Homedecor';
import Laptops from './components/routescomponents/Laptops';
import Navbar from './components/Navbar.js';
import PersonalCare from './components/routescomponents/PersonalCare';
import Smartphones from './components/routescomponents/Smartphones';
import Fashion from './components/routescomponents/Fashion.js';
import Automotive from './components/routescomponents/Automotive.js'
import Footer from './Footer.js';
import ProductInfo from './components/routescomponents/Productinfo.js';
import LoginForm from './components/routescomponents/LoginForm.js';
import SignupForm from './components/routescomponents/SignupForm.js';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CartValue from './components/CartValue.js';



function App() {
  return (

  <>
 <BrowserRouter>
 <Navbar/> 
  <CartValue/>
      <Routes>
        <Route path= "/productinfo/:id" element={<ProductInfo/>} /> 
        <Route path="/" element={<Home/>} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/homedecor" element={<Homedecor/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/automotive" element={<Automotive/>} />
        <Route path='/login' element={<LoginForm/>}/>
         <Route path='/signup' element={<SignupForm/>}/>
      </Routes>
      <Footer/> 
 </BrowserRouter>

    

   </>
  );
}

export default App;
