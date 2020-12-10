import React from 'react';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import axios from 'axios';
//import '@fortawesome/fontawesome-free/css/all.css';

import '../src/assets/css/DateRangePicker.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/default.css';
import '../src/assets/css/style.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/owl.carousel.css';
import '../src/assets/css/responsive.css';

import Header from '../src/pages/Header';
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
          integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"
          integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg=="
          crossOrigin="anonymous"
        />

        <link rel="stylesheet" href="/assets/fontawesome.min.css" />
        {/* <link rel="stylesheet" href="/assets/slick.css" /> */}
        <link rel="stylesheet" href="/assets/nprogress.css" />
        <link rel="stylesheet" href="/assets/App.css" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}
