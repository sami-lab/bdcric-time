import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from '../pages/ActiveLink';
import Skeleton from 'react-loading-skeleton';
import he from 'he';
import Clock from 'react-live-clock';
import Encryption from 'object-encrypt-decrypt';
import axios from 'axios';
import Advertisement from './Advertisement';
import { isMobile } from 'react-device-detect';

function Header() {
  let user;
  if (typeof window !== 'undefined') {
    user = localStorage.getItem('InRva2VuIg==')
      ? Encryption.decrypt(localStorage.getItem('InRva2VuIg=='))
      : null;
  }

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    $('#sticker').sticky({ topSpacing: 0 });
    $('.searchbox')
      .focus(function () {
        setFocus(true);
      })
      .focusout(function () {
        setFocus(false);
      });
  }, []);

  const fireSearch = (event) => {
    event.preventDefault();
    setNews([]);
    if (search) {
      axios
        .get(
          'https://www.bdcrictime.com/wp-json/wp/v2/search?search=' +
            search +
            '&_embed'
        )
        .then(function (response) {
          setNews(response.data);
        });
    }
  };

  return (
    <>
      <div className="sampleDiv"></div>
      {/* Header bar section start */}
      {isMobile ? (
        <Advertisement size={32050} imgstyle={{ width: '100%' }} />
      ) : null}
      <header className="header-bar-section">
        <div className="header-bar-wrapper fx-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <div className="header-top-left-text">
                  <p>
                    <Clock
                      format={'DD, MMMM YYYY'}
                      ticking={true}
                      timezone={'Asia/Dhaka'}
                    />
                    <span>|</span>
                    <Clock
                      format={'hh:mm:ss A'}
                      ticking={true}
                      timezone={'Asia/Dhaka'}
                    />
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="header-top-right-text">
                  <div className="lang-select-box">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link href="/bangla">
                          <a className="dropdown-item"> Bangla</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="login-btn">
                    {user ? (
                      <Link href="/profile">
                        <a>{user.user_display_name}</a>
                      </Link>
                    ) : (
                      <Link href="/login">
                        <a>LOGIN</a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header bar section complate */}
      {/* Logo area start */}
      <div className="site-logo-area">
        <div className="site-logo-area fx-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className={
                    isMobile ? 'site-main-logo text-center' : 'site-main-logo'
                  }
                >
                  <Link href="/">
                    <a>
                      <img src="/assets/img/site-main-logo.svg" alt="" />
                    </a>
                  </Link>
                  <a
                    href="https://www.gameof11.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '15px' }}
                  >
                    <img
                      src="/img/sponsor.svg"
                      alt=""
                      style={{ height: '70px' }}
                    />
                  </a>
                  {isMobile ? null : (
                    <Advertisement size={728} style={{ float: 'right' }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo area end */}
      {/* Header menu aera start */}
      <div className="header-top-main-menu" id="sticker">
        <div className="header-top-main-wrapper fx-padding">
          <div className="container-fluid">
            <div className="main-menu-bar">
              <nav className="navbar navbar-dark navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <div className="stkey-logo">
                    <Link href="/">
                      <a>
                        <img src="/assets/img/logo-whitetext-02.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <ul className="site-main-menu navbar-nav mr-auto">
                    <li>
                      <NavLink activeClassName="active-menu" href="/">
                        <a> HOME</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/news">
                        <a> NEWS</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/live-score">
                        <a> LIVE SCORES</a>
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink activeClassName="active-menu" href="/team">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          TEAM
                        </a>
                      </NavLink>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link href="/team/5/australia">
                          <a className="dropdown-item">
                            Australia
                            <img
                              src="https://images.cricket.com/teams/1_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/23/bangladesh">
                          <a className="dropdown-item">
                            Bangladesh{' '}
                            <img
                              src="https://images.cricket.com/teams/2_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/490/england">
                          <a className="dropdown-item">
                            England
                            <img
                              src="https://images.cricket.com/teams/3_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/21/sri-lanka">
                          <a className="dropdown-item">
                            Sri Lanka
                            <img
                              src="https://images.cricket.com/teams/8_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/7/new-zealand">
                          <a className="dropdown-item">
                            {' '}
                            New Zealand{' '}
                            <img
                              src="https://images.cricket.com/teams/5_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/13/pakistan">
                          <a className="dropdown-item">
                            Pakistan
                            <img
                              src="https://images.cricket.com/teams/6_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/19/south-africa">
                          <a className="dropdown-item">
                            South Africa
                            <img
                              src="https://images.cricket.com/teams/7_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/25/india">
                          <a className="dropdown-item">
                            India
                            <img
                              src="https://images.cricket.com/teams/4_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/11/ireland">
                          <a className="dropdown-item">
                            IreLand
                            <img
                              src="https://images.cricket.com/teams/13_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/17/west-indies">
                          <a className="dropdown-item">
                            {' '}
                            West Indies{' '}
                            <img
                              src="https://images.cricket.com/teams/9_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                        <Link href="/team/493/zimbabwe">
                          <a className="dropdown-item">
                            Zimbabwe
                            <img
                              src="https://images.cricket.com/teams/10_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/results">
                        <a> RESULTS</a>
                      </NavLink>
                    </li>
                    {/* <li><NavLink activeClassName="active-menu" href="/photos"><a>PHOTOS</a></NavLink></li> */}
                    <li>
                      <NavLink activeClassName="active-menu" href="/fixtures">
                        <a> FIXTURES</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/series">
                        <a> SERIES</a>
                      </NavLink>
                    </li>
                    {/* <li><NavLink activeClassName="active-menu" href="/stats"><a>STATS</a></NavLink></li> */}
                    <li>
                      <NavLink activeClassName="active-menu" href="/ranking">
                        <a>RANKING</a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="header-top-search-bar">
                  <div className="header-top-search-bar-main">
                    <form onSubmit={fireSearch}>
                      <button type="submit">
                        <i className="fal fa-search" />
                      </button>
                      <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={handleSearch}
                        className="searchbox"
                      />
                    </form>

                    <div
                      style={{
                        position: 'absolute',
                        top: '15px',
                        zIndex: '10',
                        background: 'white',
                        width: '100%',
                        height: 'auto',
                        padding: '30px 15px 15px 15px',
                        borderBottomRightRadius: '15px',
                        borderBottomLeftRadius: '15px',
                        transition: 'height 2s',
                      }}
                      className={focus ? null : 'd-none'}
                    >
                      {news[0] ? (
                        news.map((item, index) => (
                          <div
                            key={index}
                            style={{
                              display: 'flex',
                              width: '100%',
                              marginBottom: '10px',
                              paddingBottom: '10px',
                              borderBottom: '1px dashed #ccc',
                            }}
                          >
                            <Link
                              href={
                                item.id && item._embedded.self[0].slug
                                  ? '/news/details/' +
                                    item.id +
                                    '/' +
                                    item._embedded.self[0].slug
                                  : ''
                              }
                            >
                              <a>
                                <p
                                  style={{
                                    fontSize: '12px',
                                    marginBottom: '0px',
                                    color: '#444444',
                                    lineHeight: '18px',
                                  }}
                                >
                                  {he.decode(item.title)}
                                </p>
                              </a>
                            </Link>
                          </div>
                        ))
                      ) : (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              width: '100%',
                              marginBottom: '10px',
                              paddingBottom: '10px',
                              borderBottom: '1px dashed #ccc',
                            }}
                          >
                            <div style={{ width: '25%' }}>
                              <Link href="#">
                                <a>
                                  <Skeleton height={'50px'} width={'50px'} />
                                </a>
                              </Link>
                            </div>
                            <div style={{ width: '75%', paddingLeft: '10px' }}>
                              <Link href="#">
                                <a>
                                  <p
                                    style={{
                                      fontSize: '12px',
                                      marginBottom: '0px',
                                      color: '#444444',
                                      lineHeight: '18px',
                                    }}
                                  >
                                    <Skeleton count={2} width={'80%'} />
                                  </p>
                                </a>
                              </Link>
                            </div>
                          </div>
                          <span>
                            Please hit enter or click on the search icon
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-hs-menu fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li>
                  <NavLink activeClassName="active" href="/">
                    <a>HOME</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/news">
                    <a> NEWS</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/live-score">
                    <a> LIVE SCORES</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/results">
                    <a> RESULTS</a>
                  </NavLink>
                </li>
                {/* <li><NavLink activeClassName="active" href="/photos"><a> PHOTOS </a></NavLink></li> */}
                <li>
                  <NavLink activeClassName="active" href="/fixtures">
                    <a>FIXTURES</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/series">
                    <a> SERIES</a>
                  </NavLink>
                </li>
                {/* <li><NavLink activeClassName="active" href="/stats"><a>STATS</a></NavLink></li> */}
                <li>
                  <NavLink activeClassName="active" href="/ranking">
                    <a> RANKING</a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header menu aera end */}
    </>
  );
}

export default Header;
