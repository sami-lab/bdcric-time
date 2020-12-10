import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';

import MatchCards from '../../../../src/Components/MatchCards';
import MostPopular from '../../../../src/Components/MostPopular';
import LatestNews from '../../../../src/Components/LatestNews';
import NewsCards from '../../../../src/Components/NewsCards';
import Heros from '../../../../src/Components/Heros';
import NavLink from '../../../../src/pages/ActiveLink';
import Error from '../../../../src/pages/Error';

function SeriesDetails(props) {
  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return <Error message={props.error} />;
  }
  const history = useRouter();
  const [competitions, setCompetitions] = useState(
    props.competitions ? props.competitions : []
  );
  const [fixtures, setFixtures] = useState(
    props.fixtures ? props.fixtures : []
  );
  const [standings, setStandings] = useState(
    props.standings ? props.standings : []
  );
  // const [teams, setTeams] = useState([]);
  const [loaded, setLoaded] = useState(props.loaded ? props.loaded : false);
  const [fixturesLoaded, setFixturesLoaded] = useState(
    props.fixturesLoaded ? props.fixturesLoaded : false
  );
  const [standingsLoaded, setStandingsLoaded] = useState(
    props.standingsLoaded ? props.standingsLoaded : false
  );
  // const [teamsLoaded, setTeamsLoaded] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(
    props.imageAvailable ? props.imageAvailable : false
  );

  useEffect(() => {
    function getCompetitions() {
      axios
        .get(
          'https://rest.entitysport.com/v2/competitions/' +
            history.query.seriesId
        )
        .then((res) => {
          setCompetitions(res.data.response);
          function getLogo() {
            axios
              .get(
                'https://images.shadowbangladesh.com/v2/logo/' +
                  res.data.response.abbr +
                  '.png'
              )
              .then((res2) => {
                setImageAvailable(true);
              });
          }
          getLogo();
        });
    }

    function getFixture() {
      axios
        .get(
          'https://rest.entitysport.com/v2/competitions/' +
            history.query.seriesId +
            '/matches'
        )
        .then((res) => {
          setFixtures(res.data.response.items);
          setFixturesLoaded(true);
        });
    }

    function getStandings() {
      axios
        .get(
          'https://rest.entitysport.com/v2/competitions/' +
            history.query.seriesId +
            '/standings'
        )
        .then((res) => {
          setStandings(res.data.response);
          setStandingsLoaded(true);
        });
    }

    function getTeams() {
      // axios.get('https://rest.entitysport.com/v2/competitions/'+history.query.seriesId+"/teams")
      // .then((res) => {
      //     setTeams(res.data.response.teams);
      //     setTeamsLoaded(true);
      // })
    }

    getCompetitions();
    getFixture();
    getStandings();
    getTeams();
    setLoaded(true);
  }, [history.query.seriesId]);

  return (
    <>
      <Head>
        <title>{loaded ? competitions.title + ' - BDCricTime' : null}</title>
      </Head>
      <div>
        <Heros
          format="default"
          title={loaded ? competitions.title : null}
          logo={
            imageAvailable
              ? 'https://images.shadowbangladesh.com/v2/logo/' +
                competitions.abbr +
                '.png'
              : null
          }
        />
        {/* news content area start */}
        <div className="news-content-area fx-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="page-inner-content mb-10">
                  <div className="team-menu">
                    <ul>
                      {/* <li><NavLink activeClassName="active-menu" href={"/series/"+history.query.seriesId+"/"+history.query.seriesSlug+"/news"}>a>News</a></NavLink></li> */}
                      <li>
                        <NavLink
                          activeClassName="active-menu"
                          href={
                            '/series/' +
                            history.query.seriesId +
                            '/' +
                            history.query.seriesSlug +
                            '/'
                          }
                        >
                          <a> News</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active-menu"
                          href={
                            '/series/' +
                            history.query.seriesId +
                            '/' +
                            history.query.seriesSlug +
                            '/teams'
                          }
                        >
                          <a> Team</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active-menu"
                          href={
                            '/series/' +
                            history.query.seriesId +
                            '/' +
                            history.query.seriesSlug +
                            '/fixture'
                          }
                        >
                          <a>Fixture</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active-menu"
                          href={
                            '/series/' +
                            history.query.seriesId +
                            '/' +
                            history.query.seriesSlug +
                            '/results'
                          }
                        >
                          <a> Results</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active-menu"
                          href={
                            '/series/' +
                            history.query.seriesId +
                            '/' +
                            history.query.seriesSlug +
                            '/standings'
                          }
                        >
                          <a> Standings</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active-menu"
                          href={
                            '/series/' +
                            history.query.seriesId +
                            '/' +
                            history.query.seriesSlug +
                            '/stats'
                          }
                        >
                          <a> Stats</a>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-main-content">
                  <div className="news-widget">
                    <div className="row">
                      <div className="col-lg-12">
                        {fixtures[0] ? (
                          fixtures.map((item, index) => (
                            <MatchCards
                              format="default"
                              key={index}
                              id={fixturesLoaded ? item.match_id : null}
                              team1={fixturesLoaded ? item.teama.name : null}
                              team1ShortName={
                                fixturesLoaded ? item.teama.short_name : null
                              }
                              team1Logo={
                                fixturesLoaded ? item.teama.logo_url : null
                              }
                              team1Score={
                                fixturesLoaded ? item.teama.scores : null
                              }
                              team1Over={
                                fixturesLoaded ? item.teama.overs : null
                              }
                              team2={fixturesLoaded ? item.teamb.name : null}
                              team2ShortName={
                                fixturesLoaded ? item.teamb.short_name : null
                              }
                              team2Logo={
                                fixturesLoaded ? item.teamb.logo_url : null
                              }
                              team2Score={
                                fixturesLoaded ? item.teamb.scores : null
                              }
                              team2Over={
                                fixturesLoaded ? item.teamb.overs : null
                              }
                              status={fixturesLoaded ? item.status_note : null}
                              state={fixturesLoaded ? item.status_str : null}
                              series={
                                fixturesLoaded ? item.competition.title : null
                              }
                              title={fixturesLoaded ? item.title : null}
                              matchName={
                                fixturesLoaded ? item.short_title : null
                              }
                              startTime={
                                fixturesLoaded ? item.date_start : null
                              }
                              statusCode={fixturesLoaded ? item.status : null}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* news content area end */}
      </div>
    </>
  );
}
export async function getServerSideProps({ params }) {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    const competitions = await axios.get(
      'https://rest.entitysport.com/v2/competitions/' + params.seriesId,
      param
    );
    const res2 = await axios.get(
      'https://images.shadowbangladesh.com/v2/logo/' +
        competitions.data.response.abbr +
        '.png'
    );

    const fixtures = await axios.get(
      'https://rest.entitysport.com/v2/competitions/' +
        params.seriesId +
        '/matches',
      param
    );

    return {
      props: {
        competitions: competitions.data.response,
        imageAvailable: true,
        fixtures: fixtures.data.response.items,
        fixturesLoaded: true,
        loaded: true,
      },
    };
  } catch (err) {
    console.log(err.message);
    return {
      props: {
        error: err.message,
      },
    };
  }
}
export default SeriesDetails;
