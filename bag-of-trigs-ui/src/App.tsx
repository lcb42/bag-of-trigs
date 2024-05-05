import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from "./pages/Home"
import { Trigs } from "./pages/Trigs"
import { Page } from './templates/Page';

function App() {
  return (
    <Page>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trigs" element={<Trigs />}/>
        </Routes>
      </Router>
    </Page>
  );
}

export default App;
