import React, { useEffect } from 'react';
import NavLink from '../pages/ActiveLink';
import Clock from 'react-live-clock';

function Header() {
  useEffect(() => {
    $('#sticker').sticky({ topSpacing: 0 });
  });

  return (
    <>
      {/* Header bar section start */}
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
                        <NavLink activeClassName="active-menu" href="/bangla">
                          <a className="dropdown-item"> Bangla</a>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="login-btn">
                    <NavLink activeClassName="active-menu" href="/login">
                      <a> LOGIN</a>
                    </NavLink>
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
                <div className="site-main-logo">
                  <NavLink activeClassName="active-menu" href="/">
                    <a>
                      <img src="/assets/img/site-main-logo.svg" alt="" />
                    </a>
                  </NavLink>
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
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <div className="stkey-logo">
                    <NavLink activeClassName="active-menu" href="/">
                      <a>
                        <img src="/assets/img/logo-whitetext-02.png" alt="" />
                      </a>
                    </NavLink>
                  </div>
                  <ul className="site-main-menu navbar-nav mr-auto">
                    <li>
                      <NavLink activeClassName="active-menu" href="/">
                        <a>HOME</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/news">
                        <a>NEWS</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/live-score">
                        <a>LIVE SCORES</a>
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <NavLink activeClassName="active-menu" href="#">
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
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/australia"
                        >
                          <a className="dropdown-item">
                            Australia
                            <img
                              src="https://images.cricket.com/teams/1_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/bangladesh"
                        >
                          <a className="dropdown-item">
                            Bangladesh
                            <img
                              src="https://images.cricket.com/teams/2_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/england"
                        >
                          <a className="dropdown-item">
                            England
                            <img
                              src="https://images.cricket.com/teams/3_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/sri-lanka"
                        >
                          <a className="dropdown-item">
                            Sri Lanka
                            <img
                              src="https://images.cricket.com/teams/8_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/new-zealand"
                        >
                          <a className="dropdown-item">
                            New Zealand
                            <img
                              src="https://images.cricket.com/teams/5_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/pakistan"
                        >
                          <a className="dropdown-item">
                            Pakistan
                            <img
                              src="https://images.cricket.com/teams/6_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/south-africa"
                        >
                          <a className="dropdown-item">
                            South Africa
                            <img
                              src="https://images.cricket.com/teams/7_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/india"
                        >
                          <a className="dropdown-item">
                            India
                            <img
                              src="https://images.cricket.com/teams/4_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/ireland"
                        >
                          <a className="dropdown-item">
                            IreLand
                            <img
                              src="https://images.cricket.com/teams/13_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/west-indies"
                        >
                          <a className="dropdown-item">
                            West Indies
                            <img
                              src="https://images.cricket.com/teams/9_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                        <NavLink
                          activeClassName="active-menu"
                          href="/team/zimbabwe"
                        >
                          <a className="dropdown-item">
                            Zimbabwe
                            <img
                              src="https://images.cricket.com/teams/10_flag_safari.png"
                              alt=""
                              style={{ height: '30px' }}
                            />
                          </a>
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/results">
                        <a>RESULTS</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/fixtures">
                        <a>FIXTURES</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/series">
                        <a>SERIES</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/stats">
                        <a>STATS</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active-menu" href="/ranking">
                        <a>RANKING</a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="header-top-search-bar">
                  <div className="header-top-search-bar-main">
                    <button type="submit">
                      <i className="fal fa-search" />
                    </button>
                    <input type="text" placeholder="Search..." />
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
                    <a> HOME</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/news">
                    <a>NEWS</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/live-score">
                    <a>LIVE SCORES</a>
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" href="/results">
                    <a>RESULTS</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/fixtures">
                    <a>FIXTURES</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/series">
                    <a>SERIES</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/ranking">
                    <a>RANKING</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" href="/stats">
                    <a>STATS</a>
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
