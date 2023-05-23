import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src='/category/pro1.png' />
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

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Size:</div>
              <select className='hover:text-black'>
                <option value='1'>09</option>
                <option value='1'>06</option>
                <option value='1'>08</option>
                <option value='1'>10</option>
                <option value='1'>12</option>
                <option value='1'>14</option>
                <option value='1'>16</option>
              </select>
            </div>

            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Cantidad:</div>
              <select className='hover:text-black'>
                <option value='1'>01</option>
                <option value='1'>02</option>
                <option value='1'>03</option>
                <option value='1'>04</option>
                <option value='1'>05</option>
                <option value='1'>06</option>
                <option value='1'>07</option>
                <option value='1'>08</option>
                <option value='1'>09</option>
                <option value='1'>10</option>
              </select>
            </div>

          </div>
          <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-black text-[16px] md:text-[20px]' />
        </div>
      </div>
    </div>
  )
}
export default CartItem