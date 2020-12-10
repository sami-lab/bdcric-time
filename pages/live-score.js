import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ICCTeamRanking from '../src/Components/ICCTeamRanking';
import MostPopular from '../src/Components/MostPopular';
import LatestNews from '../src/Components/LatestNews';
import MatchCards from '../src/Components/MatchCards';
import Error from '../src/pages/Error';

function LiveScore(props) {
  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return <Error message={props.error} />;
  }
  const [matches, setMatches] = useState(props.matches);
  const [loaded, setLoaded] = useState(props.loaded);

  async function getMatches() {
    axios
      .get('https://rest.entitysport.com/v2/matches/?status=3')
      .then((res) => {
        setMatches(res.data.response.items);
        setLoaded(true);
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getMatches();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Live Scores - BDCricTime</title>
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
                        <h2>Ball by Ball Live Cricket Scores</h2>
                        <p>
                          Here you can get the live scores of the every
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
                      {matches[0] ? (
                        matches.map((item, index) => (
                          <MatchCards
                            format="default"
                            key={index}
                            id={loaded ? item.match_id : null}
                            team1={loaded ? item.teama.name : null}
                            team1ShortName={
                              loaded ? item.teama.short_name : null
                            }
                            team1Logo={loaded ? item.teama.logo_url : null}
                            team1Score={loaded ? item.teama.scores : null}
                            team1Over={loaded ? item.teama.overs : null}
                            team2={loaded ? item.teamb.name : null}
                            team2ShortName={
                              loaded ? item.teamb.short_name : null
                            }
                            team2Logo={loaded ? item.teamb.logo_url : null}
                            team2Score={loaded ? item.teamb.scores : null}
                            team2Over={loaded ? item.teamb.overs : null}
                            status={loaded ? item.status_note : null}
                            state={loaded ? item.status_str : null}
                            series={loaded ? item.competition.title : null}
                            title={loaded ? item.title : null}
                            matchName={loaded ? item.short_title : null}
                            startTime={loaded ? item.date_start : null}
                            statusCode={loaded ? item.status : null}
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
    const url = 'https://rest.entitysport.com/v2/matches/?status=3';
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
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
export default LiveScore;
