import React, { useState } from 'react';
import Link from 'next/link';

export default function ProductSlider({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = () => {
    setSelectedProduct(products);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-ES');
  };

  return (
    <Link href={`/`}>
      <div
        className={`transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer ${
          selectedProduct?.id === products?.id ? 'selected' : ''
        }`}
        onClick={handleClick}
      >
        <img className="w-full" src={products?.image} alt="Product Image" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">{products?.name}</h2>
          {products?.price && (
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold text-[#0d9488]">{`$${formatPrice(products.price)}`}</p>
              {products.originalPrice && (
                <p className="text-base font-medium line-through">{`$${formatPrice(products.originalPrice)}`}</p>
              )}
              {products.discount && (
                <p className="ml-auto text-base font-medium text-[#0d9488]">{`${products.discount}%`}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
