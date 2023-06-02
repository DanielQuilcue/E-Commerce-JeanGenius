import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HashLoader from "react-spinners/ClipLoader";

export default function ProductDetailsCarousel() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = localStorage.getItem('selectedProductId');
    if (productId) {
      fetchProduct(productId);
    }
  }, []);

  const fetchProduct = async (productId) => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();

      const selectedProduct = data.find((product) => product.id === Number(productId));
      setProduct(selectedProduct);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (!product) {
    return <HashLoader color="#36d7b7" />
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
        <img src={product.image} className="w-full h-auto" alt="Product Image" />
      </Carousel>
    </div>
  );
}







