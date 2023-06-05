import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({ title, reference, price, size, quantity, imagen, id, }) => {
  console.log(reference);
  const handleDelete = () => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      const parsedCartItems = JSON.parse(cartItems);
      const updatedCartItems = parsedCartItems.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      window.location.reload(); // Recargar la página
    }
  };
  const formattedSubtotal = price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });


  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={imagen} alt="Product" />
      </div>
      {/* Image end */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {title}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Ref: {reference}
          </div>
          <div className="text-md font-medium text-black/[0.5] hidden md:block">
            Precio: <br /> {formattedSubtotal}
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Ref: {reference}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size: {size}</div>
            </div>

          </div>
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-black text-[16px] md:text-[20px]"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
