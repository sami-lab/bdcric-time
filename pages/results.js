import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';

import ICCTeamRanking from '../src/Components/ICCTeamRanking';
import MostPopular from '../src/Components/MostPopular';
import LatestNews from '../src/Components/LatestNews';
import MatchCards from '../src/Components/MatchCards';

import Error from '../src/pages/Error';
import dateFormat from 'dateformat';

function Results(props) {
  const today = [...Array(10)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d;
  });

  const selectedDate = new Date(2000, 1, 29);
  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return <Error message={props.error} />;
  }
  return (
    <>
      <Head>
        <title>Results - BDCricTime</title>
      </Head>
      {/* news content area start */}
      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="news-main-content">
                <div className="news-widget">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="live-sc-top-blk">
                        <h2>DETAILED SCORES OF COMPLETED MATCHES</h2>
                        <p>
                          Here you can get the detailed scores of the every
                          international cricket match as well as domestic
                          cricket matches including Bangladesh domestic matches.
                          bdcrictime.com brought to you live cricket score
                          updates with commentary.
                        </p>
                        <p>
                          You can get live streaming link to watch the match
                          live here as well. For your any suggestion or inquiry
                          you are feel free to contact with us. Contact email:
                          contact@bdcricteam.com.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="calender mb-20">
                        <div className="dateIcon">
                          <img src="/img/calender.svg" alt="icon" />
                        </div>
                        {today.reverse().map((date, index) => (
                          <div
                            key={index}
                            className={
                              dateFormat(date, 'd mmm') ===
                              dateFormat(selectedDate, 'd mmm')
                                ? 'datebox active'
                                : 'datebox'
                            }
                          >
                            {dateFormat(date, 'd mmm')}
                            <br />
                            {dateFormat(date, 'ddd')}
                          </div>
                        ))}
                      </div>
                      {props.matches && props.matches[0] ? (
                        props.matches.map((item, index) => (
                          <MatchCards
                            format="default"
                            id={props.loaded ? item.match_id : null}
                            team1={props.loaded ? item.teama.name : null}
                            team1ShortName={
                              props.loaded ? item.teama.short_name : null
                            }
                            team1Logo={
                              props.loaded ? item.teama.logo_url : null
                            }
                            team1Score={props.loaded ? item.teama.scores : null}
                            team1Over={props.loaded ? item.teama.overs : null}
                            team2={props.loaded ? item.teamb.name : null}
                            team2ShortName={
                              props.loaded ? item.teamb.short_name : null
                            }
                            team2Logo={
                              props.loaded ? item.teamb.logo_url : null
                            }
                            team2Score={props.loaded ? item.teamb.scores : null}
                            team2Over={props.loaded ? item.teamb.overs : null}
                            status={props.loaded ? item.status_note : null}
                            state={props.loaded ? item.status_str : null}
                            series={
                              props.loaded ? item.competition.title : null
                            }
                            title={props.loaded ? item.title : null}
                            matchName={props.loaded ? item.short_title : null}
                            startTime={props.loaded ? item.date_start : null}
                            statusCode={props.loaded ? item.status : null}
                          />
                        ))
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
                          NO MATCH IS LIVE NOW
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar-widget-wrapper">
                <LatestNews />
                <MostPopular />
                <ICCTeamRanking />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news content area end */}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    const url =
      'https://rest.entitysport.com/v2/matches/?status=2&per_page=20&paged=1';
    const res = await axios.get(url, param);
    return {
      props: {
        matches: res.data.response.items,
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
export default Results;
