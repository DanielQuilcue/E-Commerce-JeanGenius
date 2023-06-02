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