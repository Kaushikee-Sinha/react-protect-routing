import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/Login'; 
import Home from './components/home';
import './style.css';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/home" element={<Home />} />//outlet to protect the router
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
