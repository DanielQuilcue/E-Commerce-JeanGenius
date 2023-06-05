import { useEffect } from 'react';

const WhatsAppButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('whatsapp-button');
      if (scrollButton) {
        if (window.scrollY > 100) {
          scrollButton.classList.add('show');
        } else {
          scrollButton.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const phoneNumber = '3187670260';
    const message = '¡Hola! Me gustaría obtener más información';

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <button
      id="whatsapp-button"
      className="whatsapp-button fixed bottom-6 right-6 w-14 h-14  rounded-full flex items-center justify-center transition-opacity z-10 duration-200 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img src="/cositas/whatsapp.svg" alt="WhatsApp" className="w-14 h-14"/>
    </button>
  );
};

export default WhatsAppButton;
