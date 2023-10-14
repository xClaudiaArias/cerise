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

const App = () => {
  const [customer, setLoginCustomer] = useState({})

  return (
    <>
      <Routes>
        <Route path="/" element={customer && customer?._id ? <Homepage/> : <Login setLoginCustomer={setLoginCustomer}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLoginCustomer={setLoginCustomer} /> }  />

      </Routes>

      <h1>Hello world</h1>
    </>
  )
}

export default App;
