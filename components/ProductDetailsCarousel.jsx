import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto static top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatusBar={true}
        thumbWidth={60}
        className='productCarousel'
      >
        <img src='/category/jeanspart1.jpg' />
        <img src='/category/jeanspart1.jpg' />
        <img src='/category/jeanspart1.jpg' />
        <img src='/category/jeanspart1.jpg' />
        <img src='/category/jeanspart1.jpg' />
        <img src='/category/jeanspart1.jpg' />
        <img src='/category/jeanspart1.jpg' />

      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel