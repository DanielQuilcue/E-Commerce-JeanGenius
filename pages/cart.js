import React from 'react'
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
const cart = () => {
  return (
    <div className='w-full md-py20'>
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className='text-center max-w-[800] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
          CARRITO DE COMPRAS
          </div>
        </div>
        {/* Heading and paragraph end */}
        
        {/* Cart content start */}
        <div className=' flex flex-clol lg:flex-row gap-12 py-10'>
          {/* Cart items start */}
          <div className=' flex-[2]'>
            <div  className='text-lg font-bold'>Productos</div>
              <CartItem />
              <CartItem />
              <CartItem />
          </div>
          {/* Cart items end */}

          {/* SUmmary start */}
          <div className=' flex-[1]'>
            <div className='text-lg font-bold'>Resumen</div>
          </div>
        </div>
          {/* Cart content end */}
      </Wrapper>
    </div>
  )
}
export default cart