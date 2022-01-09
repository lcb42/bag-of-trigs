import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Home"

function App() {
  return (
    <Router>
      <div>
        <h1>Oops</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
