import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

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
        <Image src='/category/pro1.png' alt='Imagen categpría' />
        <Image src='/category/pro2.png' alt='Imagen categpría' />
        <Image src='/category/pro3.png' alt='Imagen categpría' />
        <Image src='/category/pro4.png' alt='Imagen categpría' />
        <Image src='/category/pro5.png' alt='Imagen categpría' />
        <Image src='/category/pro6.png' alt='Imagen categpría' />
        <Image src='/category/pro7.png' alt='Imagen categpría' />

      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel