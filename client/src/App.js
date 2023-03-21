import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Amenities from './components/Home/Amenities';
import LoginPage from './components/Home/LoginPage';
import SearchPage from './components/Navbar/SearchPage';

import Gallery2 from './components/Gallery/Gallery2';
import Gallery3 from './components/Gallery/Gallery3';
import Gallery4 from './components/Gallery/Gallery4';
import Gallery5 from './components/Gallery/Gallery5';
import Gallery6 from './components/Gallery/Gallery6';







function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/amenities" element={<Amenities />} />
         <Route path="/loginpage" element={<LoginPage/>} />
         <Route path="/gallery2" element={<Gallery2 />} />
         <Route path="/gallery3" element={<Gallery3 />} />
         <Route path="/gallery4" element={<Gallery4/>} />
         <Route path="/gallery5" element={<Gallery5 />} />
         <Route path="/gallery6" element={<Gallery6 />} />
         <Route path="/searchpage" element={<SearchPage />} />
          </Routes>
        <Footer />
    </Router>
        
    
    
  );
}

export default App;
