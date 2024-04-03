import './App.css';
import React from 'react';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about_us/About';
import { Services } from './pages/services/Services';
import Contact from './pages/contact_us/Contact';
import Web from './components/web_development/Web';
import Brand from './components/brand_management/Brand';
import Data from './components/data_analytics/Data';
import Blogs from './pages/blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/webdevelopment" element= {<Web/>} />
          <Route path="/data_analytics" element={<Data />} />
          <Route path="/brand_management" element={<Brand />} />
          <Route path='/blogs' element = {<Blogs />} />
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

