import Image from 'next/image';

export const Room = () => {
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
                         Szoba név
                    </h1>

                    <p className = 'font-normal text-gray-400 text-base mb-3'>
                         Leírás
                    </p>

                    <p className = 'font-normal text-gray-400 text-xs mb-3'>
                         typescript, react.js, next.js, nuxt.js
                    </p>

                    <div className = 'mt-6 font-bold text-white text-xl'>
                         Speakers

                         <div className = 'm-2 w-full sm:w-400 md:w-full grid grid-cols-4 gap-5'>
                              <div className = 'flex flex-col m-2'>
                                   <img 
                                        src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=256&q=75'
                                        alt = 'user'
                                        className = 'md:w-10 md:h-10 w-6 h-6 rounded-full transition duration-500 ease-in-out ring-2 hover:ring-secondary ring-gray-300'
                                   />

                                   <p className = 'mt-2 font-normal text-white text-base md:text-center text-left'>
                                        Takayu
                                   </p>

                                   <span className = 'font-normal lowercase text-gray-400 text-base md:text-center text-left'>
                                        Házigazda
                                   </span>
                              </div>
                         </div>
                    </div>

                    <div className = 'mt-4 font-bold text-white text-xl'>
                         Hallgatók

                         <span className = 'm-2 mr-2 p-1 px-2.5 py-0.5 rounded-8 text-xs font-normal text-black bg-gray-200'>
                              2
                         </span>

                         <div className = 'w-full sm:w-400 md:w-full grid grid-cols-4 gap-5'>
                              <div className = 'flex flex-col m-2'>
                                   <img 
                                        src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=256&q=75'
                                        alt = 'user'
                                        className = 'md:w-10 md:h-10 w-6 h-6 rounded-full transition duration-500 ease-in-out ring-2 hover:ring-secondary ring-gray-300'
                                   />

                                   <p className = 'mt-2 font-normal text-white text-base md:text-center text-left'>
                                        Takayu
                                   </p>
                              </div>

                              <div className = 'flex flex-col m-2'>
                                   <img 
                                        src = 'https://craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=256&q=75'
                                        alt = 'user'
                                        className = 'md:w-10 md:h-10 w-6 h-6 rounded-full transition duration-500 ease-in-out ring-2 hover:ring-secondary ring-gray-300'
                                   />

                                   <p className = 'mt-2 font-normal text-white text-base md:text-center text-left'>
                                        Takayu
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
};