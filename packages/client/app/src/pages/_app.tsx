import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { QueryClient, QueryClientProvider } from 'react-query';
import { NotificationsProvider } from 'reapop';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Rayza's fox</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} />
        </NotificationsProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
