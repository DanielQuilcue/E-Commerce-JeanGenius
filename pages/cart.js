import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';
import Image from 'next/image';
import Resumen from '@/components/Resumen';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
    setCartItems(parsedCartItems);
  }, []);

  const handleDeleteItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    // Actualizar el localStorage con la nueva lista de elementos del carrito
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="w-full md-py20">
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            CARRITO DE COMPRAS
          </div>
        </div>
        {/* Heading and paragraph end */}

        {/* Cart content start */}
        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Cart items start */}
          <div className="flex-[2]">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.name}
                  reference={item.reference}
                  price={item.price}
                  size={item.size}
                  quantity={item.quantity}
                  imagen={item.imagen}
                  id={item.id}
                  onDelete={handleDeleteItem} // Pasar la función handleDeleteItem como prop
                />
              ))
            ) : (
              // Renderizar el contenido cuando el carrito esté vacío
              <div className="flex flex-col items-center pb-[50px] md:mt-10">
                <Image
                  src="/cositas/empty-cart.jpg"
                  width={300}
                  height={300}
                  className="w-[300px] md:w-[400px]"
                  alt="Carrito"
                />
                <span className="text-xl font-bold">Su carrito está vacío</span>
                <span className="text-center mt-4">
                  Parece que no has añadido nada a tu carrito.
                  <br />
                  Siga adelante y explore las principales categorías.
                </span>
                <Link
                  href="/"
                  className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                >
                  Continuar comprando
                </Link>
              </div>
            )}
          </div>
          {/* Cart items end */}

          {/* Summary start */}
          {cartItems.length > 0 && <Resumen />}
        </div>
        {/* Cart content end */}
      </Wrapper>
    </div>
  );
};

export default Cart;
