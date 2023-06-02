import React, { useState } from 'react';
import Link from 'next/link';

export default function ProductSlider({ product }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = () => {
    setSelectedProduct(product);
  };

  return (
    // <Link href={`/product/${product.id}`}>
    <Link href={`/`}>
      <div
        className={`transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer ${
          selectedProduct && selectedProduct.id === product.id ? 'selected' : ''
        }`}
        onClick={handleClick}
      >
        <img className="w-full" src={product.image} alt="Product Image" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">{product.name}</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold text-[#0d9488]">{`$${product.price}`}</p>
            <p className="text-base font-medium line-through">{`$${product.originalPrice}`}</p>
            <p className="ml-auto text-base font-medium text-[#0d9488]">{`${product.discount}%`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
