import '../styles/index.css';
import Head from 'next/head';

import { AppProps } from 'next/app';
import { MainLayout } from '../components/layouts/MainLayout';

function _app({ Component, pageProps }: AppProps) {
     return (
          <>   
               <MainLayout>
                    <Head>
                         <meta name = 'viewport' content = 'width=device-width, initial-scale=1, user-scalable=no, user-scalable=0' />
                    </Head>

                    <Component { ... pageProps} />
               </MainLayout>
          </>
     );
};

export default _app;