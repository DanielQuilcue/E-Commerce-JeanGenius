import Link from 'next/link'
import React from 'react'
export default function ProductCard() {
  return (
    <Link href="/product/1">
      <img className='w-full' src='/jeans.webp' alt='Product Iamge' />
      <div className='p-4 text-black/[0.9]'>
        <h2 className='text-lg font-medium'>Product Name</h2>
        <div className='flex items-center text-black/[0.5]'>
          <p className='mr-2 text-lg font-semibold'>$30.00</p>
          <p className='text-base font-medium line-through'>$25.00</p>
          <p className='text-base font-medium text-green-500'>20% off</p>
        </div>
      </div>
    </Link>
  )
}
