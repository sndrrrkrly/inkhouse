import Image from 'next/image';

import { useRouter } from 'next/router';

export const Landing = () => {
     const router = useRouter();

     const handleSubmit = (e: any) => {
          e.preventDefault();
          console.log(e.target[0].value);
     };

     const createRoom = (e: any) => {
          e.preventDefault();
          router.push('/create-room');
     };

     return (
          <>
               <div className = 'p-6 rounded-8 z-10 sm:w-600 w-400 bg-primary mt-6 mb-6 text-center'>
                    <Image
                         src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ffootprint-dark.png&w=32&q=75'
                         height = { 24 }
                         width = { 24 }
                         alt = 'inkHouse logo'
                    />
                         
                    <h1 className = 'font-bold text-white text-xl'>
                         Hozz létre egy szobát!
                    </h1>

                    <p className = 'font-normal text-gray-300 text-xs mb-3'>
                         Kattints a lenti gombra szoba létrehozásáért.
                    </p>

                    <button onClick = { createRoom } className = 'transition duration-500 ease-in-out p-2 bg-secondary hover:bg-blue-600 rounded-8 text-white text-xs'>
                         Szoba létrehozása
                    </button>

                    <div className = 'mt-4 mb-4'>
                         <h1 className = 'font-bold text-white text-xl'>
                              Csatlakozni szeretnél egyhez?
                         </h1>

                         <p className = 'font-normal text-gray-300 text-xs mb-3'>
                              Add meg a szoba azonosítóját és már is csatlakozhatsz!
                         </p>

                         <form onSubmit = { handleSubmit }>
                              <input type = 'id' placeholder = 'Szoba azonosító' required className = 'm-2 p-2 text-xs text-gray-200 bg-washed rounded-8 mb-3' />
                              <input type = 'submit' value = 'Csatlakozás' className = 'transition duration-500 ease-in-out p-2 bg-secondary hover:bg-blue-600 rounded-8 text-white text-xs cursor-pointer' />
                         </form>
                    </div>

                    <p className = 'font-normal text-gray-400 text-xs'>
                         Szoba létrehozásával és vagy csatlakozással elfogadod az <br /> 
                         adatvédelmi irányelveinket és felhasználási feltételeinket.
                    </p>
               </div>
          </>
     )
};