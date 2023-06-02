import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProductDetailsCarousel from './ProductDetailsCarousel';

export default function ProductCards() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    localStorage.setItem('selectedProductId', productId); // Guardar el ID en localStorage
    router.push(`/product/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
      {products.map((product) => (
        <div
          key={product.id}
          className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
          onClick={() => handleProductClick(product.id)}
        >
          <Image
            width={500}
            height={500}
            src={product.image}
            alt='Product Image'
          />
          <div className='p-4 text-black/[0.9]'>
            <h2 className='text-lg font-medium'>{product.name}</h2>
            {product.price && (
              <div className='flex items-center text-black/[0.5]'>
                <p className='mr-2 text-lg font-semibold text-[#0d9488]'>{`$${product.price}`}</p>
                {product.originalPrice && (
                  <p className='text-base font-medium line-through'>{`$${product.originalPrice}`}</p>
                )}
                {product.discount && (
                  <p className="ml-auto text-base font-medium text-[#0d9488]">{`${product.discount}%`}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      {selectedProductId && (
        <ProductDetailsCarousel productId={selectedProductId} />
      )}
    </div>
  );
}
