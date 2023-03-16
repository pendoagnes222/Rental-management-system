import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Amenities from './components/Home/Amenities';
import LoginPage from './components/Home/LoginPage';







function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/amenities" element={<Amenities />} />
         <Route path="/loginpage" element={<LoginPage/>} />
          </Routes>
        <Footer />
    </Router>
        
    
    
  );
}

export default App;
