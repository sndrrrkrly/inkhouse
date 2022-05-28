import Image from 'next/image';

export const Landing = () => {
     return (
          <>
               <div className = 'p-6 rounded-8 z-10 sm:w-600 w-400 bg-primary mt-6 mb-6'>
                    <Image
                         src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ffootprint-dark.png&w=32&q=75'
                         height = { 24 }
                         width = { 24 }
                         alt = 'inkHouse logo'
                    />
                         
                    <h1 className = 'font-bold text-white text-xl'>
                         Köszöntelek
                    </h1>

                    <p className = 'font-normal text-gray-400 text-base mb-3'>
                         Kattints a lenti gombra szoba létrehozásáért.
                    </p>

                    <p className = 'font-normal text-gray-400 text-xs mb-3'>
                         Szoba létrehozásával és vagy csatlakozással elfogadod az <br /> 
                         adatvédelmi irányelveinket és felhasználási feltételeinket.
                    </p>

                    <button className = 'transition duration-500 ease-in-out p-2 bg-secondary hover:bg-blue-600 rounded-8 text-white text-xs'>
                         Szoba létrehozása
                    </button>
               </div>
          </>
     )
};