import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './firebase'
import ProductDetails from './Components/ProductDetails';

function App() {

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser){
        // the user just logged in / the user was logged in
      } else {
        // the user is logged out
      }
    })

  }, [])


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
        <Route path='/products/:id' element={
          <>
            <Header />
            <ProductDetails />
          
          </>
        } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
