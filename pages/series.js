import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import ReactTypingEffect from 'react-typing-effect';

import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import SeriesBox from '../src/pages/SeriesBox';

import Error from '../src/pages/Error';

function Series(props) {
  const [format, setFormat] = useState('live');

  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return <Error message={props.error} />;
  }
  return (
    <>
      <Head>
        <title>Series - BDCricTime</title>
      </Head>
      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="serise-inner-blk">
                <div className="src-top-menu">
                  <ul>
                    <li>
                      <Link href="#">
                        <a
                          onClick={() => setFormat('live')}
                          className={
                            format === 'live' ? 'acttive-serise-menu' : null
                          }
                        >
                          Current
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={() => setFormat('fixture')}
                          className={
                            format === 'fixture' ? 'acttive-serise-menu' : null
                          }
                        >
                          Upcoming
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          onClick={() => setFormat('result')}
                          className={
                            format === 'result' ? 'acttive-serise-menu' : null
                          }
                        >
                          Completed
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {props.loaded ? (
                  <>
                    <SeriesBox
                      title="international"
                      data={props.series}
                      format={format}
                    />
                    <SeriesBox
                      title="domestic"
                      data={props.series}
                      format={format}
                    />
                  </>
                ) : (
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontSize: '30px',
                      color: '#cccccc',
                      textAlign: 'center',
                      padding: '100px',
                    }}
                  >
                    <Loader
                      type="Audio"
                      color="#cccccc"
                      height={30}
                      width={30}
                      style={{
                        display: 'inline',
                        marginTop: '0px',
                        marginRight: '15px',
                      }}
                    />
                    <ReactTypingEffect
                      typingDelay={0}
                      speed={200}
                      eraseDelay={1000}
                      text={['LOADING', 'PLEASE WAIT...']}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar-widget-wrapper">
                <LatestNews />
                <MostPopular />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const url =
      'https://rest.entitysport.com/v2/competitions?per_page=500&paged=1';
    const res = await axios.get(url);
    return {
      props: {
        series: res.data.response.items.reverse(),
        loaded: true,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
export default Series;
