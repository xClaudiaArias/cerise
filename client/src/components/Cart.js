import React from 'react'
import cat from '../img/cat.jpg'


const cart = {
  products: []
}

class Cart extends React.Component {
  render () {
    if (cart.products.length === 0) {
      return <div>Cart is empty!</div>
    } else {
      return (
        <>
          <div className='cart__products'>
            <div className='cart__product-info'>
              <div className='cart__product-num'>
                1
              </div>
              <div className='cart__product-img'>
                <img src={cat} alt='img alt' width='img-w' height='img-h'/>
              </div>
              <div className='cart__product-container'>
                <p className='cart__product-name'>Product Name</p>
                <p className='cart__product-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='cart__product-color'>
                  <p>Color:</p> 
                  <div className='cart__product-color-circle'></div>
                </div>
                <div className='cart__product-color'>
                  <p>Size:</p> 
                  <div className='cart__product-size-s'>S</div>
                  <div className='cart__product-size-m'>M</div>
                  <div className='cart__product-size-l'>L</div>
                </div>
                <div className='cart__product-amount'>
                  <div className='cart__product-minus'>
                    <p>-</p>
                  </div>
                  <div className='cart__product-num'>
                    <p>1</p>
                  </div>
                  <div className='cart__product-minus'>
                    <p>+</p>
                  </div>
                </div>
                <div className='cart__product-price'>
                  <p>$0.00</p>
                </div>
                <div className='cart__product-add-wishlist'>
                  heart
                </div>
              </div>
              <div className='cart__product-remove'>x</div>
            </div>
          </div>
  
          <div className='cart__amount-info'>
  
          </div>
        </>
      )
    }
  }
}

export default Cart