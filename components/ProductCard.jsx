import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProductDetailsCarousel from './ProductDetailsCarousel';

export default function ProductCards() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

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

  const formatPrice = (price) => {
    return price.toLocaleString('es-ES');
  };

  return (
    <>
     <h2 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center'> Elige Nuestros Mejores Productos </h2>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

        <button
          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
            selectedCategory === 'Todos' ? 'border-black' : ''
          }`}
          onClick={() => setSelectedCategory('Todos')}
        >
          Todos
        </button>
        <button
          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
            selectedCategory === 'Jeans' ? 'border-black' : ''
          }`}
          onClick={() => setSelectedCategory('Jeans')}
        >
          Jeans
        </button>
        <button
          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
            selectedCategory === 'Chaquetas' ? 'border-black' : ''
          }`}
          onClick={() => setSelectedCategory('Chaquetas')}
        >
          Chaquetas
        </button>
        
        {/* <button
          className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ${
            selectedCategory === 'Chaquetas' ? 'border-black' : ''
          }`}
          onClick={() => setSelectedCategory('Chaquetas')}
        >
          Proximamente
        </button> */}
        {/* Agrega más botones de categoría según tus necesidades */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
      
      {products.map((product) => {
        if (selectedCategory === 'Todos' || product.category === selectedCategory) {
          return (
            <div
              key={product.id}
              className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <Image width={500} height={500} src={product.image} alt="Product Image" />
              <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{product.name}</h2>
                {product.price && (
                  <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold text-[#0d9488]">{`$${formatPrice(product.price)}`}</p>
                    {product.originalPrice && (
                      <p className="text-base font-medium line-through">{`$${formatPrice(product.originalPrice)}`}</p>
                    )}
                    {product.discount && (
                      <p className="ml-auto text-base font-medium text-[#0d9488]">{`${product.discount}%`}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        }       
        else {
          return null; // Si el producto no pertenece a la categoría seleccionada, no se muestra
        }
      })}
      {selectedProductId && <ProductDetailsCarousel productId={selectedProductId} />}
    </div>
    </>
  );
}

