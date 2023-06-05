import React, { useState, useEffect } from 'react';

const Resumen = ({ orderDetails }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

    const calculatedSubtotal = parsedCartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);

    setSubtotal(calculatedSubtotal);
  }, []);

  const handlePayment = () => {
    const cartItems = localStorage.getItem('cartItems');
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let salutation = '';
    if (currentHour >= 0 && currentHour < 12) {
      salutation = 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 18) {
      salutation = 'Buenas tardes';
    } else {
      salutation = 'Buenas noches';
    }
  
    const message = parsedCartItems.map((item) => {
      return `${item.name}, Ref: ${item.reference}, Precio: ${item.price}`;
    }).join('\n');
  
    const fullMessage = `${salutation}, aquí están los productos que deseo ordenar:\n${message}. El precio total de la compra: \n${formattedSubtotal}`;
  
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/3187670260?text=${encodedMessage}`;
  
    window.open(whatsappURL, '_blank');
  };
  
  const formattedSubtotal = subtotal.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
  
  // const formattedSubtotalItem = price.toLocaleString('es-CO', {
  //   style: 'currency',
  //   currency: 'COP',
  //   minimumFractionDigits: 0,
  // });
  return (
    <div className="flex-[1]">
      <div className="text-lg font-bold">Resumen</div>

      <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
        <div className="flex justify-between">
          <div className="uppercase text-md md:text-lg font-medium text-black">Subtotal</div>
          <div className="text-md md:text-lg font-medium text-black">{formattedSubtotal}</div>
        </div>
        <div className="text-sm md:text-md py-5 border-t mt-5">
          El subtotal refleja el precio total de su pedido, impuestos incluidos, antes de cualquier descuento aplicable. No incluye los gastos de envío ni los gastos de transacción internacional.
        </div>
      </div>

      <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75" onClick={handlePayment}>
        Pago
      </button>
    </div>
  );
};

export default Resumen;
