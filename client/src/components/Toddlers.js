import React from 'react'
import Sidebar from './Sidebar'
import Gallery from './Gallery'

class Toddlers extends React.Component {
  render () {
    return (
      <>
        <div>Toddlers</div>
        <Sidebar />
        <Gallery />
      </>
    )
  }
}

export default Toddlers