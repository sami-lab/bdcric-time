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
                        <div className="single-fixture-blk">
                          <div className="fx-top-blk">
                            <h4>
                              Ban<span className="srt-name">gladesh</span> VS In{' '}
                              <span className="srt-name">dia</span>
                            </h4>
                            <div className="fx-top-right-info">
                              <span>1st ODI</span>
                              <span>6-DEC-2019</span>
                              <span>4:00 PM</span>
                            </div>
                          </div>
                          <div className="fx-inner-part">
                            <div className="fx-inner-top-info">
                              <span>Live</span>
                            </div>
                            <div className="fx-inner-main-part">
                              <div className="single-team-info">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/flag.svg"
                                  alt=""
                                />
                                <h3>
                                  <img src="/assets/img/ball.png" alt="" /> ban
                                  <span>gladesh</span>
                                </h3>
                                <p>
                                  300 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                              <div className="vs">
                                <h3>-VS-</h3>
                              </div>
                              <div className="single-team-info rt-blk">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/f-india.png"
                                  alt=""
                                />
                                <h3>
                                  IND<span>ia</span>
                                  <img src="/assets/img/ball.png" alt="" />{' '}
                                </h3>
                                <p>
                                  290 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="para-des">
                            India needs 11 more runs to win from 8 balls with 5
                            wickets in hand
                          </p>
                          <div className="fx-bottom-blk">
                            <Link href="#">
                              <a>View match details</a>
                            </Link>
                          </div>
                        </div>
                        <div className="single-fixture-blk">
                          <div className="fx-top-blk">
                            <h4>Bangladesh VS India</h4>
                            <div className="fx-top-right-info">
                              <span>1st ODI</span>
                              <span>6-DEC-2019</span>
                              <span>4:00 PM</span>
                            </div>
                          </div>
                          <div className="fx-inner-part">
                            <div className="fx-inner-top-info up-c">
                              <span>Upcoming</span>
                            </div>
                            <div className="fx-inner-main-part">
                              <div className="single-team-info">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/flag.svg"
                                  alt=""
                                />
                                <h3>
                                  <img src="/assets/img/ball.png" alt="" /> ban
                                  <span>gladesh</span>
                                </h3>
                                <p>
                                  300 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                              <div className="vs">
                                <h3>-VS-</h3>
                              </div>
                              <div className="single-team-info rt-blk">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/f-india.png"
                                  alt=""
                                />
                                <h3>
                                  IND<span>ia</span>
                                  <img src="/assets/img/ball.png" alt="" />{' '}
                                </h3>
                                <p>
                                  290 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="para-des">
                            India needs 11 more runs to win from 8 balls with 5
                            wickets in hand
                          </p>
                          <div className="fx-bottom-blk">
                            <Link href="#">
                              <a>View match details</a>
                            </Link>
                          </div>
                        </div>
                        <div className="single-fixture-blk">
                          <div className="fx-top-blk">
                            <h4>Bangladesh VS India</h4>
                            <div className="fx-top-right-info">
                              <span>1st ODI</span>
                              <span>6-DEC-2019</span>
                              <span>4:00 PM</span>
                            </div>
                          </div>
                          <div className="fx-inner-part">
                            <div className="fx-inner-top-info up-c">
                              <span>Upcoming</span>
                            </div>
                            <div className="fx-inner-main-part">
                              <div className="single-team-info">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/flag.svg"
                                  alt=""
                                />
                                <h3>
                                  <img src="/assets/img/ball.png" alt="" /> ban
                                  <span>gladesh</span>
                                </h3>
                                <p>
                                  300 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                              <div className="vs">
                                <h3>-VS-</h3>
                              </div>
                              <div className="single-team-info rt-blk">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/f-india.png"
                                  alt=""
                                />
                                <h3>
                                  IND<span>ia</span>
                                  <img src="/assets/img/ball.png" alt="" />{' '}
                                </h3>
                                <p>
                                  290 / 5 <br />
                                  <span>(50 OVERS)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="para-des">
                            India needs 11 more runs to win from 8 balls with 5
                            wickets in hand
                          </p>
                          <div className="fx-bottom-blk">
                            <Link href="#">
                              <a>View match details</a>
                            </Link>
                          </div>
                        </div>
                        <div className="single-fixture-blk">
                          <div className="fx-top-blk">
                            <h4>Bangladesh VS India</h4>
                            <div className="fx-top-right-info">
                              <span>1st ODI</span>
                              <span>6-DEC-2019</span>
                              <span>4:00 PM</span>
                            </div>
                          </div>
                          <div className="fx-inner-part">
                            <div className="fx-inner-top-info up-c">
                              <span>Upcoming</span>
                            </div>
                            <div className="fx-inner-main-part">
                              <div className="single-team-info">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/flag.svg"
                                  alt=""
                                />
                                <h3>
                                  <img src="/assets/img/ball.png" alt="" /> ban
                                  <span>gladesh</span>
                                </h3>
                                <p>
                                  300 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                              <div className="vs">
                                <h3>-VS-</h3>
                              </div>
                              <div className="single-team-info rt-blk">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/f-india.png"
                                  alt=""
                                />
                                <h3>
                                  IND<span>ia</span>
                                  <img src="/assets/img/ball.png" alt="" />{' '}
                                </h3>
                                <p>
                                  290 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="para-des">
                            India needs 11 more runs to win from 8 balls with 5
                            wickets in hand
                          </p>
                          <div className="fx-bottom-blk">
                            <Link href="#">
                              <a>View match details</a>
                            </Link>
                          </div>
                        </div>
                        <div className="single-fixture-blk">
                          <div className="fx-top-blk">
                            <h4>Bangladesh VS India</h4>
                            <div className="fx-top-right-info">
                              <span>1st ODI</span>
                              <span>6-DEC-2019</span>
                              <span>4:00 PM</span>
                            </div>
                          </div>
                          <div className="fx-inner-part">
                            <div className="fx-inner-top-info up-c">
                              <span>Upcoming</span>
                            </div>
                            <div className="fx-inner-main-part">
                              <div className="single-team-info">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/flag.svg"
                                  alt=""
                                />
                                <h3>
                                  <img src="/assets/img/ball.png" alt="" /> ban
                                  <span>gladesh</span>
                                </h3>
                                <p>
                                  300 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                              <div className="vs">
                                <h3>-VS-</h3>
                              </div>
                              <div className="single-team-info rt-blk">
                                <img
                                  className="fx-flag-img"
                                  src="/assets/img/f-india.png"
                                  alt=""
                                />
                                <h3>
                                  IND<span>ia</span>
                                  <img src="/assets/img/ball.png" alt="" />{' '}
                                </h3>
                                <p>
                                  290 / 5 <br /> <span>(50 OVERS)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="para-des">
                            India needs 11 more runs to win from 8 balls with 5
                            wickets in hand
                          </p>
                          <div className="fx-bottom-blk">
                            <Link href="">
                              <a>View match details</a>
                            </Link>
                          </div>
                        </div>
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

    return {
      props: {
        competitions: competitions.data.response,
        imageAvailable: true,
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
