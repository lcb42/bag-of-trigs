import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Home from "./pages/Home/Home"
import Trigs from "./pages/Trigs/Trigs"
import Page from './templates/page';

function App() {
  return (
    <Router>
      <div className='page-wrap'>
        <Page>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/trigs" element={<Trigs />}/>
          </Routes>
        </Page>
      </div>
    </Router>
  );
}

export default App;
