'use client';
import React from 'react';
import Link from 'next/link';


const NotFoundPage = () => { 
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 font-sans">
      <div className="text-center">
    
        <h2 className="text-3xl font-bold tracking-tight text-[#0056b3] sm:text-4xl border-b-4 border-[#0056b3] inline-block pb-1">
          Страница не найдена
        </h2>

        <div className="relative mt-10">
          <h1 className="text-[150px] font-black leading-none text-[#1e73e8] drop-shadow-[4px_4px_0px_rgba(30,115,232,0.2)] sm:text-[200px]">
            404
          </h1>
        </div>

     
        <p className="mt-6 text-base leading-7 text-gray-500 max-w-md mx-auto">
          Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. 
          Попробуйте воспользоваться поиском.
        </p>

     
<div className="mt-10 flex items-center justify-center gap-x-4">
<button 
  onClick={() => window.history.back()} 
  className="rounded-lg bg-gray-100 px-12 py-4 text-base font-bold text-[#0056b3] shadow-md hover:bg-gray-200 hover:shadow-lg active:scale-95 transition-all duration-200"
>
  Вернуться назад
</button>

<Link 
    href="/" 
    className="rounded-md bg-[#1e73e8] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1557b0] transition-colors uppercase text-center"
  >
    На главную
  </Link>
</div>
      </div>
    </main>
  );
};

export default NotFoundPage;