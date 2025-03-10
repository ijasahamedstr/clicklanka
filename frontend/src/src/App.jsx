import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Page/header';
import Topbar from './Page/topbar';  
import Home from './Page/home';
import './App.css';
import Footer from './Page/Footer';
import Contact from './Page/contact';
import Aboutus from './Page/About-us';
import AirFreight from './Page/AirFreight';
import SeaFreight from './Page/SeaFreight';
import LandTransport from './Page/LandTransport';
import WareHousing from './Page/WareHousing';

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/services/warehousing" element={<WareHousing />} />
        <Route path="/services/land-transport" element={<LandTransport />} />
        <Route path="/services/sea-freight" element={<SeaFreight />} />
        <Route path="/services/air-freight" element={<AirFreight />} />
        <Route path="/products" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
