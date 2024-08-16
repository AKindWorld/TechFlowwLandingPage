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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ProductDemo />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
