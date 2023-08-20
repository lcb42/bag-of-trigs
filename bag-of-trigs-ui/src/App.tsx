import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "react-bootstrap/Navbar"
import NavBar from './components/NavBar';

import Home from "./Home"
import Trigs from "./Trigs"

function App() {
  return (
    <Router>
      <div className='page-wrap'>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/trigs" element={<Trigs />}/>
          </Routes>
        <Navbar bg="transparent" expand="lg" fixed="bottom"><p className='footer-content'>lucyblatherwick - 2022</p></Navbar>
      </div>
    </Router>
  );
}

export default App;
