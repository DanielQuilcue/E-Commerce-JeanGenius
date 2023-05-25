import React, { useState } from 'react';
import Link from 'next/link';
import productsData from '../public/data/products.json';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProductDetailsCarousel from './ProductDetailsCarousel';

export default function ProductCards() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
      {productsData.map((product) => (
        <div
          key={product.id}
          className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
          onClick={() => handleProductClick(product)}
        >
          <Image
            width={500}
            height={500}
            src={product.image}
            alt='Product Image'
          />
          <div className='p-4 text-black/[0.9]'>
            <h2 className='text-lg font-medium'>{product.name}</h2>
            <div className='flex items-center text-black/[0.5]'>
              <p className='mr-2 text-lg font-semibold text-[#0d9488]'>{`$${product.price}`}</p>
              <p className='text-base font-medium line-through'>{`$${product.originalPrice}`}</p>
              <p className="ml-auto text-base font-medium text-[#0d9488]">{`${product.discount}%`}</p>
            </div>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <ProductDetailsCarousel product={selectedProduct} />
      )}
    </div>
  );
}
