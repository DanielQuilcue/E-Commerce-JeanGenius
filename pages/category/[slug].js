import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductSlider from '@/components/ProductsSlider'

const Category = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            Running Shoes
          </div>
        </div>
        {/* Products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductSlider />
        </div>
        {/* Products grid start */}
      </Wrapper>
    </div>
  )
}

export default Category