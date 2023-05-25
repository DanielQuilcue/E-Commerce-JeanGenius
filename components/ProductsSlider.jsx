import React from 'react';
import Link from 'next/link';
export default function ProductSlider({product}) {
  // Product logic
    // Id, debe ser unico
    // Name, nombre del producto
    // Imagen, debe estar en la ruta /products
    // Price, precio en descuento
    // OriginalPrice, original precio
    // Discount, Descuento que puede tener en ese momento el producto
  // end 
  return (
    <Link 
      // href={`/product/${p.slug}`}
      href="/"
    >
      <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
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