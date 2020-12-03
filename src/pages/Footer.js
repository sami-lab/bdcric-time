import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      {/* Footer top-area start */}
      <div className="footer-top-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="top-app-banner">
                <Link href="#">
                  <a>
                    <img src="/assets/img/add-banner.svg" alt="" />
                  </a>
                </Link>
              </div>
              <div className="subs-area">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <div className="subs-area-left-text">
                      <h3>Subscribe to our NEWSLETTER</h3>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="subs-form">
                      <div className="subs-form-main">
                        <form action="">
                          <input
                            type="text"
                            disabled
                            placeholder="Enter Your Email"
                          />
                          <button type="submit">Subscribe</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer top-area end */}
      {/* Footer area start */}
      <div className="footer-area ">
        <div className="footer-wrapper fx-padding ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-single-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <img src="/assets/img/footer-main-logo.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="footer-widget-texts">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-single-widget">
                  <div className="footer-widget-texts d-flex justify-content-start">
                    <div className="footer-menu-single-blk">
                      <ul>
                        <li>
                          <Link href="/">
                            <a> HOME</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/live-score">
                            <a>LIVE SCORES</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/fixtures">
                            <a> FIXTURES</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/international">
                            <a>INTERNATIONAL</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/bangladesh">
                            <a>BANGLADESH</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-menu-single-blk">
                      <ul>
                        <li>
                          <Link href="/teams">
                            <a>TEAMS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/photos">
                            <a>PHOTOS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/videos">
                            <a>VIDEOS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/stats">
                            <a>STATS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ranking">
                            <a>RANKING</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-2">
                <div className="footer-single-widget">
                  <div className="footer-widget-texts">
                    <div className="site-social-icons-links">
                      <Link href="/facebook">
                        <a>
                          <img src="/assets/img/facebook.svg" alt="" />
                        </a>
                      </Link>
                      <Link href="/twitter">
                        <a>
                          <img src="/assets/img/twitter.svg" alt="" />
                        </a>
                      </Link>
                      <Link href="/linkedin">
                        <a>
                          <img src="/assets/img/linked in.svg" alt="" />
                        </a>
                      </Link>
                      <Link href="/pinterest">
                        <a>
                          <img src="/assets/img/pinterest.svg" alt="" />
                        </a>
                      </Link>
                    </div>
                    <div className="foote-action-buttons">
                      <Link href="/advertising">
                        <a>CONTACT FOR ADVERTISING </a>
                      </Link>
                      <Link href="/become-a-writer">
                        <a>BECOME A WRITER </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-cp-text">
        <p>© Copyright bdcrictime 2019</p>
      </div>
      {/* Footer area end */}
    </>
  );
}

export default Footer;
