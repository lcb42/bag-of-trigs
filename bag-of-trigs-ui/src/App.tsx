import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home"
import Trigs from "./Trigs"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trigs" element={<Trigs />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
