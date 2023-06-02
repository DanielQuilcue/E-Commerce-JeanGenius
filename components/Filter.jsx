import Image from 'next/image';
import React from 'react'
export const Filter = () => {
  return (
    <>
      <h2 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center'> Elige Nuestros Mejores Productos </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
            Todos
          </div>
          <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
            Jeans
          </div>
          <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
            Chaquetas
          </div>
          <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed">
            Proximamente
          </div>
        </div>
      </div>

    </>
  )
}
