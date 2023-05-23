import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">¡Pago fallido!</div>
          <div className="text-base mt-5">
            Para cualquier consulta relacionada con los productos, envíe un correo electrónico a          
          </div>
          <div className="underline">JeanGenius.@gmail.com</div>

          <Link
            href='/'
            className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8 text-center'>
            Continuar comprando
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;