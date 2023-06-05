import React, { useState, useEffect } from 'react';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Popap from '@/components/Popap';
import HashLoader from 'react-spinners/ClipLoader';
// import { AlertSuccess } from '@/utils/utils';
import { AlertWarning } from '@/components/AlertWarning';

const ProductDetails = ({text}) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState(null);
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [alertWarning, setAlertWarning] = useState(false)


  const cerrarPopup = () => {
    setMostrarPopup(false);
  };

  useEffect(() => {
    const productId = localStorage.getItem('selectedProductId');
    if (productId) {
      fetchProduct(productId);
    }
  }, []);

  const fetchProduct = async (productId) => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();

      const selectedProduct = data.find((product) => product.id === Number(productId));
      setProduct(selectedProduct);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-ES');
  };

  const addToCart = () => {
    if (!selectedSize) {
      setAlertWarning(true);
      setTimeout(() => {
        setAlertWarning(false);
      }, 3000);
      return;
    }
  
    const cartItems = localStorage.getItem('cartItems');
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  
    const existingItem = parsedCartItems.find(
      (item) => item.id === product.id
    );
  
    if (existingItem) {
      alert('Este producto ya está en el carrito');
      return;
    }
  
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      imagen: product.image,
      reference: product.reference
    };
  
    const updatedCartItems = [...parsedCartItems, newItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    alert('El producto se agregó al carrito');
  };
  

  if (!product) {
    return <HashLoader color="#36d7b7" />;
  }

  if (!product) {
    return <HashLoader color="#36d7b7" />;
  }

  return (
    <div className="w-full md:py-20">
      {mostrarPopup && <Popap onClose={cerrarPopup} />}
      
      <Wrapper>
      
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column start */}

          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Left column end */}

          {/* Left column start */}
          <div className="flex-[1] py-3">
            {/* Product Name */}
            <div className="text-[19px] font-semibold mb-2">{product.name}</div>
            {/* Products Subtitle */}
            <div className="text-lg font-semibold mb-5">Ref: {product.reference}</div>

            {/* Products Price */}
            <div className="text-LGfont-semibold">
              {/* {$${formatPrice(product.price)}} */}
            </div>
            {/* <div className="text-sm font-medium text-black/[0.5]">
              NOMBRE FABRICANTE: Doll
            </div> */}
            <div className="text-md font-medium text-black/[0.5] mb-20">{ }</div>
            {/* Product size range start */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Elegir la talla</div>
                <div
                  className="text-md font-medium text-black/[0.5] cursor-pointer underline decoration-gray-400 hover:decoration-black"
                  onClick={() => setMostrarPopup(true)}
                >
                  Guía de talla
                </div>
              </div>
            </div>

            {/* Size start */}
            
            <div className="grid grid-cols-3 gap-2 py-4">
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '04' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('04')}
              >
                04
              </div>
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '06' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('06')}
              >
                06
              </div>
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '08' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('08')}
              >
                08
              </div>
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '10' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('10')}
              >
                10
              </div>
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '12' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('12')}
              >
                12
              </div>
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '14' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('14')}
              >
                14
              </div>
              <div
                className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === '16' ? 'border-black' : ''
                  }`}
                onClick={() => setSelectedSize('16')}
              >
                16
              </div>
            </div>

            {/* Add Button car */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={addToCart}
            >
              Agregar al carrito
            </button>

            {/* WHISHLIST BUTTON START */}
            {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button> */}

            {/* <div className='text-lg font-bold mb-5'>
              Información del producto
            </div>
            <div className='text-md mb-5'>
              Algodón 78% poliéster 20% elastano 2% algodón 78.00%poliéster 20.00%elastano 2.00%


            </div> */}

          </div>


          {/* Left column end */}
          {alertWarning && <AlertWarning />}
{/* {alertSuccess && <AlertSuccess />} */}
        </div>

        <RelatedProducts />
        
      </Wrapper>
    </div>
  )
}
export default ProductDetails
