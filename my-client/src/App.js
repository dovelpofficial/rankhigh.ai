import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navbar from "./components/Navbar"
import About from './Pages/About';
import React from 'react';
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;