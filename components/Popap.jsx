import React, { useState } from 'react';

const tallasData = {
  'prendas-superiores': [
    { Talla: 'XS', Busto: '86-88', Cintura: '64-66' },
    { Talla: 'S', Busto: '90-92', Cintura: '68-70' },
    { Talla: 'M', Busto: '94-96', Cintura: '72-74' },
    { Talla: 'L', Busto: '98-100', Cintura: '76-78' },
    { Talla: 'XL', Busto: '102-104', Cintura: '80-82' },
    { Talla: 'XXL', Busto: '106-108', Cintura: '84-86' },
  ],
  'prendas-inferiores': [
    { Talla: '4', Cintura: '60-62', Cadera: '90-92' },
    { Talla: '6', Cintura: '64-66', Cadera: '94-96' },
    { Talla: '8', Cintura: '68-70', Cadera: '98-100' },
    { Talla: '10', Cintura: '72-74', Cadera: '102-104' },
    { Talla: '12', Cintura: '76-78', Cadera: '106-108' },
    { Talla: '14', Cintura: '80-82', Cadera: '110-112' },
  ],
  'vestidos-enterizos': [
    { Talla: '6', Busto: '86-88', Cintura: '64-66', Cadera: '94-96' },
    { Talla: '8', Busto: '90-92', Cintura: '68-70', Cadera: '98-100' },
    { Talla: '10', Busto: '94-96', Cintura: '72-74', Cadera: '102-104' },
    { Talla: '12', Busto: '98-100', Cintura: '76-78', Cadera: '106-108' },
    { Talla: '14', Busto: '102-104', Cintura: '80-82', Cadera: '110-112' },
  ],
  'chaquetas-sobretodos': [
    { Talla: '6', Busto: '86-88', Cintura: '64-66', },
    { Talla: '8', Busto: '90-92', Cintura: '68-70', },
    { Talla: '10', Busto: '94-96', Cintura: '72-74', },
    { Talla: '12', Busto: '98-100', Cintura: '76-78', },
    { Talla: '14', Busto: '102-104', Cintura: '80-82', },
  ],
};

function Popap({ onClose }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Obtener las claves para las columnas del thead
  const getTableColumns = () => {
    if (selectedOption && tallasData[selectedOption].length > 0) {
      const sampleData = tallasData[selectedOption][0];
      return Object.keys(sampleData);
    }
    return [];
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center popap-overlay">
      <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            alt="Tallas"
            src="../cositas/imagenTallas.webp"
            className="h-full w-full rounded-xl object-cover img-responsive"
            style={{ maxHeight: "70vh", maxWidth: "100%", width: "auto" }} // Establecer una altura máxima para mantener la proporción en pantallas más pequeñas
          />

          <div className='grid content-center '>
            <h2 className="text-lg font-bold mb-5 text-center">GUÍA DE TALLAS</h2>

            <select
              className="mb-4"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Seleccione una categoría</option>
              <option value="prendas-superiores">Prendas Superiores</option>
              <option value="prendas-inferiores">Prendas Inferiores</option>
              <option value="vestidos-enterizos">Vestidos y Enterizos</option>
              <option value="chaquetas-sobretodos">Chaquetas y Sobretodos</option>
            </select>


            {selectedOption && (
              <div>
                {selectedOption === "prendas-superiores" && (
                  <>
                    <h3 className='text-lg font-bold mb-5'>Prendas Superiores
                    </h3>
                    <p className='text-md font-medium text-black/[0.5] hidden md:block'>Blusas, blusones y bodys</p>
                  </>
                )}
                {selectedOption === "prendas-inferiores" && (
                  <>
                    <h3 className='text-lg font-bold mb-5'>Prendas Inferiores</h3>
                    <p className='text-md font-medium text-black/[0.5] hidden md:block'>Pantalones, jeans, faldas, shorts y leggings</p>

                  </>)}
                {selectedOption === "vestidos-enterizos" && (
                  <>
                    <h3 className='text-lg font-bold mb-5'>Vestidos y Enterizos</h3>
                    <p className='text-md font-medium text-black/[0.5] hidden md:block'>Descripción de vestidos y enterizos</p>
                  </>
                )}
                {selectedOption === "chaquetas-sobretodos" && (
                  <>
                    <h3 className='text-lg font-bold mb-5'>Chaquetas y Sobretodos</h3>
                    <p className='text-md font-medium text-black/[0.5] hidden md:block'>Chaquetas, chalecos y sobretodos</p>
                  </>
                )}

                <table class="w-full text-sm  text-black dark:text-black-400 text-center">
                  <thead className='border-b font-medium dark:border-neutral-500'>
                    <tr className='px-6 py-3'>
                      {getTableColumns().map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='border-b font-medium dark:border-neutral-500'>
                    {tallasData[selectedOption].map((talla) => (
                      <tr className='' key={talla.talla}>
                        {getTableColumns().map((column) => (
                          <td className='' key={column}>{talla[column]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className='py-2'>Medidas basadas en centímetros (cm).</p>

            <div className="mt-2 sm:text-right flex justify-center">
              <button className='inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white' onClick={onClose}>Cerrar Popup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popap;
