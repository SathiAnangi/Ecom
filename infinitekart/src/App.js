
import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Brand from './pages/Brand';
import Home from './pages/Home'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route path="/home" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/category/:id" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
