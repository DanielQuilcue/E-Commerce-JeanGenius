import React, {useState, useEffect} from 'react';
export function AlertWarning() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // El componente se ocultará después de 3 segundos (ajusta el valor según tus necesidades)

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null; // Si isVisible es falso, no se muestra el componente
  }
  return (
    <div className="fixed bottom-11 right-0 mb-4 mr-4 sm:mb-8 sm:mr-8 z-[9999]}" 
    >
      <div className="w-64 sm:w-96 max-w-full shadow-lg rounded-lg flex">
        <div className="py-4 px-6 rounded-l-lg flex items-center " style={{backgroundColor: "rgb(243 255 0)"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="fill-current text-white" width="20" height="20"><path fillule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>

        </div>
        <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
          <div className='text-md font-semibold'>Por favor, seleccione una talla</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700"
              viewBox="0 0 16 16"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

