import React from 'react';
import dynamic from 'next/dynamic';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import axios from 'axios';

//import '../src/assets/css/fontawesome.min.css';
dynamic(
  () => {
    import('../src/assets/css/slick.css');
    import('../src/assets/css/owl.carousel.css');
  },
  {
    ssr: false,
  }
);
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/default.css';

import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  Router.onRouteChangeStart = (url) => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  axios.interceptors.request.use((config) => {
    if (config.url.includes('https://rest.entitysport.com/')) {
      config.params = { token: '437214169d9be2a73e91d22f76f68b52' };
    }
    return config;
  });
  return (
    <React.Fragment>
      <Head>
        <title>
          Live Cricket Scores, Latest News of Bangladesh and International
          Cricket - BDCricTime
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="stylesheet" href="/assets/nprogress.css" />
        <link rel="stylesheet" href="/assets/App.css" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}
