import React from 'react'
import cat from '../img/cat.jpg'

const fillerImg = {
  src: "../img/cat.jpg",
  alt: 'cat with sunglasses',
  width: '300px',
  height: '300px'
}

const product = {
  title: 'Produc Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  productColors: ['White', 'Yellow', 'Pink'],
  productFave: '<3'
}


class Gallery extends React.Component {



  render () {
    return (
      <>
      <div className="gallery-container">
        <div className="product-card">
          <img src={cat} alt={fillerImg.alt} width={fillerImg.width} height={fillerImg.height}/>
          <div className="product-colors">
            <div className="product-colors">

            </div>
          </div>
          <div className="product-fave">{product.productFave}</div>
          <div className="product-title">{product.title}</div>
          <div className="product-description">{product.description}</div>
        </div>
      </div>
      </>
    )
  }
}

export default Gallery