import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSlider from './ProductsSlider';
import productsData from '../public/data/products.json';

export default function RelatedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    marginLeft: '20px'
  };

  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
      {/* <div className='text-2xl font-bold mb-5'>También podría gustarte</div>

      <Slider {...sliderSettings}>
        {products.map((products) => (
          <div key={products.id}>
            <ProductSlider products={products} />
          </div>
        ))}
      </Slider> */}

    </div>
  );
}


