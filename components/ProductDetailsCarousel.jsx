import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import productsData from '../public/data/products.json';
import Image from 'next/image';

const ProductDetailsCarousel = ({ product, imageUrl  }) => {
  const filteredProduct = product && productsData.find(
    (productData) => productData.id === product.id
  );

  if (!filteredProduct || !filteredProduct.image) {
    return (
      <div>
        <Image
          className="w-full h-auto"
          src="/products/CargoMilitar.jpg"
          alt="Imagen"
          width="300"
          height="300"
        />
      </div>
    );
  }

  console.log(filteredProduct.image, "imagen final");

  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto static top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatusBar={true}
        thumbWidth={60}
        className='productCarousel'
      >
        <Image
          className="w-full h-auto"
          src={filteredProduct.image}
          alt="Imagen"
          width="300"
          height="300"
        />
      </Carousel>
      {/* <h2 className='text-black'>Componente Hijo</h2>
      <Image src={imageUrl} alt="Imagen" width="280" height="260"/> */}
    </div>
  );
}

export default ProductDetailsCarousel;


// import React, { useState, useEffect } from 'react';
// import productsData from '../public/data/products.json';

// export default function ProductCards({ product }) {
//   const [productsFinal, setProductFinal] = useState([]);
//   const [productsTotal, setProductsTotal] = useState(null);

//   useEffect(() => {
//     // Simular la carga de datos desde el archivo JSON
//     // Aquí puedes cargar los datos reales desde el archivo JSON local
//     const loadData = async () => {
//       // Simular una solicitud de carga de datos (en este caso, datos estáticos del archivo JSON)
//       const response = await fetch('/data/products.json');
//       const data = await response.json();
//       setProductFinal(data);
//     };

//     loadData();
//   }, []);

//   useEffect(() => {
//     if (!product) return;
//     setProductsTotal(product);
//     console.log(product, 'final');
//   }, [product]);

//   if (productsFinal.length === 0) {
//     // Los datos aún no se han cargado, mostrar mensaje de carga o representación alternativa
//     return <p>Cargando productos...</p>;
//   }

//   const filteredProduct = productsFinal.find((item) => item.id === productsTotal);
//   const productName = filteredProduct ? filteredProduct.name : 'Producto no encontrado';

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
//       <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
//         <h2>{productName}</h2>
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import productsData from '../public/data/products.json';

// export default function ProductCards() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Simular la carga de datos desde el archivo JSON
//     // Aquí puedes cargar los datos reales desde el archivo JSON local
//     const loadData = async () => {
//       // Simular una solicitud de carga de datos (en este caso, datos estáticos del archivo JSON)
//       const response = await fetch('/data/products.json');
//       const data = await response.json();
//       setProducts(data);
//     };

//     loadData();
//   }, []);

//   if (products.length === 0) {
//     // Los datos aún no se han cargado, mostrar mensaje de carga o representación alternativa
//     return <p>Cargando productos...</p>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
//       {products.map((product) => (
//         <div key={product.id} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
//           {/* Renderizar el contenido del producto */}
          
//         </div>
//       ))}
//     </div>
//   );
// }