import Link from 'next/link'
import React from 'react'
export default function ProductCard() {
  return (
    <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img className='w-full' src='/products/pantalones.jpg' alt='Product Iamge' />
      <div className='p-4 text-black/[0.9]'>
        <h2 className='text-lg font-medium'>JEAN ULTRA SLIM LUPITA TIRO SUPER ALTO T</h2>
        <div className='flex items-center text-black/[0.5]'>
          <p className='mr-2 text-lg font-semibold text-[#0d9488]'>$169.900</p>
          <p className='text-base font-medium line-through'>200.000</p>
          <p className="ml-auto text-base font-medium text-[#0d9488]">
            40%</p>
        </div>
      </div>
    </Link>
  )
} 