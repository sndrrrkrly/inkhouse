import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Input from '../../components/ui/Input';
import Axios from 'axios';

export const CreateRoom = () => {
     const [ roomName, setRoomName ] = useState('');
     const [ roomDescription, setRoomDescription ] = useState('');
     const [ roomTags, setRoomTags ] = useState('');

     const [ errors, setErrors ] = useState<any>({}); 
     const router = useRouter();

     const submitCreating = async (event: FormEvent) => {
          event.preventDefault();

          try {
               console.log(roomName);
               console.log(roomDescription);
               console.log(roomTags);

               /* 
               await Axios.post('/room/create', {
                    roomName,
                    roomDescription,
                    roomTags,
               }); 
               */

               // router.push('/r/');
          } catch(err) {
               setErrors(err.response.data);
          };
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
                         Szoba létrehozása
                    </h1>

                    <p className = 'font-normal text-gray-400 text-xs mb-3'>
                         Szoba létrehozásával és vagy csatlakozással elfogadod az <br /> 
                         adatvédelmi irányelveinket és felhasználási feltételeinket.
                    </p>

                    <p className = 'font-normal text-gray-300 text-xs mb-3'>
                         Kérlek add meg a létrehozandó szobád adatait.
                    </p>
                    
                    <form onSubmit = { submitCreating }>
                         <Input
                              type = 'text'
                              value = { roomName }
                              setValue = { setRoomName }
                              placeholder = 'Szoba név'
                              error = { errors.roomName }
                         />

                         <Input
                              type = 'text'
                              value = { roomDescription }
                              setValue = { setRoomDescription }
                              placeholder = 'Szoba rövid leírása'
                              error = { errors.roomDescription }
                         />

                         <Input
                              type = 'text'
                              value = { roomTags }
                              setValue = { setRoomTags }
                              placeholder = 'Szoba címkék'
                              error = { errors.roomTags }
                         />

                         <input 
                              type = 'submit' 
                              value = 'Szoba létrehozása' 
                              className = 'transition duration-500 ease-in-out p-2 bg-secondary hover:bg-blue-600 rounded-8 text-white text-xs cursor-pointer' 
                         />
                    </form>
               </div>
          </>
     )
};