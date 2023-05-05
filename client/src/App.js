import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Cart from './components/Cart';
import Search from './components/Search';
import Register from './components/Register'
import Wishlist from './components/Wishlist';
import Babies from './components/Babies';
import Toddlers from './components/Toddlers';
import Kids from './components/Kids';
import Accessories from './components/Accessories';
import Home from './components/Home';
// import Footer from './components/Footer';
import Homepage from './components/Homepage';

import {useState} from 'react';




function App() {
  const [customer, setLoginCustomer] = useState({})
  return (
    <div className="App">
          {console.log(customer, " :customer")}
      {/**/}
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />

          {/* 👇 switch statement here  */}
          <Route path="register" element={<Register />} />

          {/* 👆 switch statement here  */}

          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />


          {/* Categories NavBar */}
            <Route path="/categories/babies" element={<Babies />} />
            <Route path="/categories/toddlers" element={<Toddlers />} />
            <Route path="/categories/kids" element={<Kids />} />
            <Route path="/categories/accessories" element={<Accessories />} />
          {/* END categories NavBar*/}

        </Route> {/*end LAYOUT route*/}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
