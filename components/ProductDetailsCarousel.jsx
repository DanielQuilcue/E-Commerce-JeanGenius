import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({ product }) => {
  useEffect(() => {
    console.log(product);
  }, [product]);

  if (!product || !product.image) {
    return null; // No hay datos del producto o imagen, no renderizar nada
  }

  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto static top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatusBar={true}
        thumbWidth={60}
        className='productCarousel'
      >
        {product.image && <img className="w-full h-auto" src={product.image} alt="Imagen" />}
        {/* Mostrar otros detalles del producto aquí */}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel;
