import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';
import Error from '../../../src/pages/Error';

import Trending from '../../../src/Components/Trending';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Team(props) {
  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return <Error message={props.error} />;
  }
  const history = useRouter();
  const [team, setTeam] = useState(props.team);
  const [loaded, setLoaded] = useState(props.loaded);

  useEffect(() => {
    function getTeam() {
      axios
        .get('https://rest.entitysport.com/v2/teams/' + history.query.teamId)
        .then((res) => {
          setTeam(res.data.response);
          setLoaded(true);
        });
    }
    getTeam();
  }, [history.query.teamId]);

  return (
    <>
      <Head></Head>
      <SkeletonTheme
        color="rgba(255, 255, 255, .1)"
        highlightColor="rgba(255, 255, 255, .05)"
      >
        <div>
          <div className="inner-page-hero-area  fx-padding">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="inner-page-hero-content"
                    style={{
                      backgroundImage: "url('/img/team-header-banner.png')",
                    }}
                  >
                    <div className="hero-page-inner-top-texts">
                      <div className="left-hr-flag">
                        <img
                          src={loaded ? team.thumb_url : null}
                          alt=""
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div className="hr-rt-dets">
                        <h2>{loaded ? team.title : <Skeleton />}</h2>
                        <div className="social-link-list">
                          <Link href="#">
                            <a>
                              {' '}
                              <img src="/img/dribble.svg" alt="" />
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              {' '}
                              <img src="/img/facebook.svg" alt="" />
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              {' '}
                              <img src="/img/twitter.svg" alt="" />
                            </a>
                          </Link>
                          <Link href="#">
                            <img src="/img/insta.svg" alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-buttons-list">
                      <Link href="#">
                        <a>
                          TEST <span>9</span>
                        </a>
                      </Link>
                      <Link href="">
                        <a>
                          {' '}
                          TEST <span>9</span>
                        </a>
                      </Link>
                      <Link href="">
                        <a>
                          {' '}
                          TEST <span>9</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inner page hero area end */}
          {/* news content area start */}
          <div className="news-content-area fx-padding">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9">
                  <div className="page-inner-content">
                    <div className="team-menu">
                      <ul>
                        <li>
                          <Link href="#">
                            <a className="active-menu"> News</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Fixture </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Results</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Players</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Gallery</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="news-main-content">
                    <div className="news-widget">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="post2">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <img
                                    src="/img/newsupdate thumbnail.png"
                                    alt="img"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="content">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, q uis nostrud
                                exercitationminim veniam, q uis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="post2">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <img
                                    src="/img/newsupdate thumbnail.png"
                                    alt="img"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="content">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, q uis nostrud
                                exercitationminim veniam, q uis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="post2">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <img
                                    src="/img/newsupdate thumbnail.png"
                                    alt="img"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="content">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, q uis nostrud
                                exercitationminim veniam, q uis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post3 ">
                        <div className="row">
                          <div className=" col-sm-4">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <img src="/img/post-img2.png" alt="img" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="content">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                dipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                consectetur dipisicing elit, sed do eiusmod
                                tempo consectetur Ut enim ad veniam...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post3 ">
                        <div className="row">
                          <div className=" col-sm-4">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <img src="/img/post-img2.png" alt="img" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="content">
                              <Link href="#">
                                <a>
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                dipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                consectetur dipisicing elit, sed do eiusmod
                                tempo consectetur Ut enim ad veniam...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post3 ">
                        <div className="row">
                          <div className=" col-sm-4">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  <img src="/img/post-img2.png" alt="img" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="content">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                dipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                consectetur dipisicing elit, sed do eiusmod
                                tempo consectetur Ut enim ad veniam...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post3 mb-0">
                        <div className="row">
                          <div className=" col-sm-4">
                            <div className="img">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <img src="/img/post-img2.png" alt="img" />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="content">
                              <Link href="#">
                                <a>
                                  {' '}
                                  <h5>
                                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                                  </h5>
                                </a>
                              </Link>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                dipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                consectetur dipisicing elit, sed do eiusmod
                                tempo consectetur Ut enim ad veniam...
                              </p>
                              <Link href="#">
                                <a className="read-more"> READ MORE</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="seemore-btn-inner">
                        <Link href="#">
                          <a className="ld-more-btn"> Load More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="sidebar-widget-wrapper">
                    <div className="sidebar-widget rank-widget fct-wd">
                      <h4 className="heading-title">Quick Facts</h4>
                      <div className="facts-info">
                        <h5>Association</h5>
                        <div className="inner-facts-texts">
                          <img src="assets/img/tiger-img.svg" alt="" />
                          <p>Bangladesh Cricket Board</p>
                        </div>
                        <div className="nk-name">
                          <h5>Nickname</h5>
                          <p>The Tigers</p>
                        </div>
                        <div className="captine">
                          <h5>Captain</h5>
                          <div className="cpt-list-items">
                            <p>
                              <span>Test</span>Mominul Haque
                            </p>
                            <p>
                              <span>ODI</span>Mashrafe Bin Mortaza
                            </p>
                            <p>
                              <span>T20</span>Mahmudullah
                            </p>
                            <p>
                              <span>Coach</span>Russell Domingo
                            </p>
                          </div>
                        </div>
                        <div className="nk-name">
                          <h5>History</h5>
                          <p>Test Status 2020</p>
                        </div>
                        <div className="nk-name">
                          <h5>Matches</h5>
                          <div className="match-table">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <span className="gp" />
                                  </th>
                                  <th>P</th>
                                  <th>W</th>
                                  <th>L</th>
                                  <th>T</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="gp">Mark</span>
                                  </td>
                                  <td>117</td>
                                  <td>13</td>
                                  <td>88</td>
                                  <td>16</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="gp">Mark</span>
                                  </td>
                                  <td>373</td>
                                  <td>125</td>
                                  <td>241</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="gp">Mark</span>
                                  </td>
                                  <td>94</td>
                                  <td>30</td>
                                  <td>62</td>
                                  <td>0</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Trending />
                    <div className="sidebar-widget popular-widget">
                      <h4 className="heading-title">Most Popular</h4>
                      <div>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <Link href="#nav-7">
                            <a
                              className="nav-item nav-link active"
                              data-toggle="tab"
                            >
                              {' '}
                              Today
                            </a>
                          </Link>
                          <Link href="#nav-8">
                            <a className="nav-item nav-link" data-toggle="tab">
                              Last 7 Days
                            </a>
                          </Link>
                          <Link href="#nav-9">
                            <a className="nav-item nav-link" data-toggle="tab">
                              {' '}
                              Last 30 Days
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-7">
                          <nav>
                            <ul>
                              <li>
                                <span>1</span>
                                <Link href="#">
                                  <a>
                                    {' '}
                                    <p>Lorem Ipsum is simply dummy ..</p>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <span>2</span>
                                <Link href="#">
                                  <a>
                                    {' '}
                                    <p>
                                      Lorem int and typesetting int and
                                      typesetting int and typesetting int and
                                      typesetting...
                                    </p>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <span>3</span>
                                <Link href="#">
                                  <a>
                                    {' '}
                                    <p>
                                      Lorem int and typesetting int and
                                      typesetting int and typesetting int and
                                      typesetting...
                                    </p>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <span>4</span>
                                <Link href="#">
                                  <a>
                                    {' '}
                                    <p>
                                      Lorem int and typesetting int and
                                      typesetting int and typesetting int and
                                      typesetting...
                                    </p>
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <span>5</span>
                                <Link href="#">
                                  <a>
                                    <p>
                                      Lorem int and typesetting int and
                                      typesetting int and typesetting int and
                                      typesetting...
                                    </p>
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="tab-pane fade" id="nav-8"></div>
                        <div className="tab-pane fade" id="nav-9"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* news content area end */}
        </div>
      </SkeletonTheme>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    const url = 'https://rest.entitysport.com/v2/teams/' + params.teamId;
    const res = await axios.get(url, param);
    return {
      props: {
        team: res.data.response,
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
export default Team;
