import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'
import Gallery from './Gallery'

class Babies extends React.Component {

  render() {
    return (
      <>
        <h1 className='BABIES-category-h1'>BABIES -- <span className='BABIES-subcategory'>Dresses</span></h1>
        <Sidebar />
        <Gallery />
  
  
      </>
  
    )
  }
}

export default Babies