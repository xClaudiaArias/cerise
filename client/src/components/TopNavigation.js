import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Babies from './Babies';
import Toddlers from './Toddlers';
import Kids from './Kids';
import Accessories from './Accessories';

const TopNavigation = () => {
  return (
    <Routes>
      <Route path="/categories" element={<Navigation />}> 
        <Route path="babies" element={<Babies />} />
        <Route path="toddlers" element={<Toddlers />} />
        <Route path="kids" element={<Kids />} />
        <Route path="accessories" element={<Accessories />} />
      </Route> {/* end LAYOUT route */}
    </Routes>
  )
}

export default TopNavigation