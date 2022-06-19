import React from 'react';
import { Route, Routes} from "react-router-dom";
import Header from "./common_assets/header/header"
import Home from "./pages/home/home.js"
import Footer from "./common_assets/footer/footer"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Diagnosis from './pages/diagnosis/diagnosis';
import Contact from "./pages/contactus/contactus"
import Signup from "./pages/signup/signup";
import Upload2 from './pages/upload_2.0/upload2';

// import About from "./pages/aboutus/aboutus"
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/upload" element={<Upload2 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App