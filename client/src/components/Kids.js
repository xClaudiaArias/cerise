import React from 'react'
import Sidebar from './Sidebar'
import Gallery from './Gallery'

class Kids extends React.Component {
  render () {
    return (
      <>
        <div>Kids</div>
        <Sidebar />
        <Gallery />
      </>
    )
  }
}

export default Kids