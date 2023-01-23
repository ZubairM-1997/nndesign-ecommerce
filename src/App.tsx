import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/checkout' element={
          <>
            <Header />
            <Checkout />
          </>
        }/>
        <Route path='/home' element={
          <>
            <Header />
            <Home />
          </>
        }/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
