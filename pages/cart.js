import React from 'react'
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import Image from "next/image";
const cart = () => {
  return (
    <div className='w-full md-py20'>
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            CARRITO DE COMPRAS
          </div>
        </div>
        {/* Heading and paragraph end */}

        {/* Cart content start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Cart items start */}
          <div className=' flex-[2]'>
            <div className='text-lg font-bold'>Productos</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart items end */}

          {/* SUmmary start */}
          <div className=' flex-[1]'>
            <div className='text-lg font-bold'>Resumen</div>

            <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
              <div className='flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>Subtotal</div>
                <div className='text-md md:text-lg font-medium text-black'>$ 169.900</div>
              </div>
              <div className='text-sm md:text-md py-5 border-t mt-5'>
                El subtotal refleja el precio total de
                su pedido, impuestos y aranceles incluidos,
                antes de cualquier descuento aplicable. No incluye
                no incluye los gastos de envío ni
                los gastos de transacción internacional.
              </div>
            </div>
            {/* Button start */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Pago
            </button>
            {/* Button end */}
          </div>
        </div>
        {/* Cart content end */}
        <div className='flex-[2] flex flex-col items-center pb-[50px] md:mt-14'>
          <Image 
            src="/cositas/empty-cart.jpg"
            width={300}
            height={300}
            className='w-[300px] md:w-[400px]'
            alt='Carrito'
          />
          <span className='text-xl font-bold'>
          Su carrito está vacía
          </span>
          <span className='text-center mt-4'>
          Parece que no has añadido nada a tu carrito.
          <br />
          Siga adelante y explore las principales categorías.
          </span>
          <Link
            href='/'
            className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'>
            Continuar comprando
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}
export default cart