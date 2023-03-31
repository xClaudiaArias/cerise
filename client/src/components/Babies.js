import React from 'react'
import Sidebar from './Sidebar'
import Gallery from './Gallery'
import Accessories from './Accessories'

class Babies extends React.Component {

  render() {
    return (
      <>
        <div>Babies</div>
        <Sidebar />
        <Gallery />
  
  
        <button onClick={this.props.handleEvent}>Click Me for Accessories</button>
      </>
  
    )
  }
}

export default Babies