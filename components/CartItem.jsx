import Image from 'next/image'
import React from 'react'

const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
    {/* Image start */}
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <Image  src='/category/pro1.png' alt='Imagen categoría'/>
      </div>
      {/* Image end */}
      <div className='w-full flex flex-col'>
      <div className="flex flex-col md:flex-row justify-between">
          {/* Product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
          JEAN ULTRA SLIM LUPITA TIRO SUPER ALTO T
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
          Ref: S139910A
          </div>

          <div className="text-md font-medium text-black/[0.5] hidden md:block">
            Precio: <br></br>$ 169.900
          </div>

          

        </div>
        <div className='text-md font-medium text-black/[0.5] hidden md:block'>
        Ref: S139910A
          </div>
      </div>
    </div>
  )
}
export default CartItem