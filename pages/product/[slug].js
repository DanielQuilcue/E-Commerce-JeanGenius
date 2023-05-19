import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          {/* Left column start */}
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          {/* Left column end */}

          {/* Left column start */}
          <div className='flex-[1] py-3'>
            {/* Product Name */}
            <div className='text-[19px] font-semibold mb-2'>
            JEAN ULTRA SLIM LUPITA TIRO SUPER ALTO T
            </div>
            {/* Products Subtitle */}
            <div className='text-lg font-semibold mb-5'>
            Ref: S139910A
            </div>

            {/* Products Price */}
            <div className='text-LG font-semibold'>
            $ 169.900
            </div>
            <div className='text-sm font-medium text-black/[0.5]'>
            NOMBRE FABRICANTE: STF GROUP S.A – NIT. 805003626-4
            </div>
            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {}
            </div>

            {/* Product size range start */}
            <div className='mb-10'>
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>
                  Elegir la talla
                </div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Guía de talla
                </div>
              </div>
            </div>

            {/* Size start */}
            <div className='grid grid-cols-3 gap-2'>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
09              
</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                06
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                08
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                10
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                12
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
               14
              </div>
              <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                16
              </div>
            </div>
            <div className='text-red-600 mt-1'>
              Selecionar talla
            </div>
            {/* Add Button car */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Agregar al carrito
            </button>
            {/* WHISHLIST BUTTON START */}
            {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button> */}

            <div className='text-lg font-bold mb-5'>
              Información del producto
            </div>
            <div className='text-md mb-5'>
            Algodón 78% poliéster 20% elastano 2% algodón 78.00%poliéster 20.00%elastano 2.00%


            </div>
          </div>


          {/* Left column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  )
}
export default ProductDetails