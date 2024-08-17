import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

import Home from './Pages/Home'
import ProductDemo from './Pages/ProductDemo'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ProductDemo />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
