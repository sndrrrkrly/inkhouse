export const MainLayout = (props: any) => {
     const { children } = props;

     return (
          <>
               <main className = 'justify-center items-center text-left bg-washed'>
                    <div className = 'flex flex-col items-center justify-center min-w-screen min-h-screen'>
                         { children }
                    </div>
               </main>
          </>
     );
};