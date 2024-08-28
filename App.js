import logo from './logo.svg';
import './App.css';
import React from 'react';
import{ BrowserRouter as Router,Routes, Route} from "react-router-dom"

import Header from './components/Header1';
import Banner from './components/Banner';
import Productlist from './components/Productlist';
import ShoppingBasket from './components/ShoppingBasket';
import CheckoutAd from './components/CheckoutAd';
function App() {
  return (
    <Router>
       <Header/>
       <Routes>
        <Route exact path="/" element={
          <React.Fragment>
              <Banner/>
              <Productlist/>
          </React.Fragment>
          
        }/>
        <Route exact path="/checkout" element={
          <React.Fragment>
            <CheckoutAd/>
            <ShoppingBasket/>
          </React.Fragment>
        } />

       </Routes>

    </Router>
    
  );
}

export default App;
