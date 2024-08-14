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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ProductDemo />} />
      </Routes>
    </Router>
  )
}

export default App
