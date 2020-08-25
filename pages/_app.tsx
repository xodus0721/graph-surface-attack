import * as React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

interface IAppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: IAppProps) => {
  return (
    <>
      <Head>
        <title>Graph-Surface-Attack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
