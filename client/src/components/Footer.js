import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <>
        <div className='footer'>
          <div className='footer__logo'>LOGO</div>
          <div className='footer__links'>
            <div>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div>
            <form>
              <input type='text' placeholder='Subscribe' />
              <button type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Footer