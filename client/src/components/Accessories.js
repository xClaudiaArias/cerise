import React from 'react'
import Sidebar from './Sidebar'
import Gallery from './Gallery'
import Babies from './Babies'

class Accessories extends React.Component {
  handleEvent = () => {
    alert('Accessories say: HOW U DOING')
  }

  render() {
    return (
      <Babies handleEvent={this.handleEvent} />
    )
  }
}

export default Accessories