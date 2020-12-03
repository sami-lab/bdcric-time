import React from 'react';
import Link from 'next/link';

function LatestNews() {
  return (
    <>
      <div className="sidebar-widget trend-widget">
        <h4 className="heading-title">Latest News</h4>
        <nav>
          <ul>
            <li>
              <div className="img">
                <Link href="#">
                  <a>
                    <img src="/assets/img/trending thumbnail.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link href="#">
                  <a>
                    <p>Lorem Ipsum is simply dummy text to print ...</p>
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className="img">
                <Link href="#">
                  <a>
                    <img src="/assets/img/trending thumbnail.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link href="#">
                  <a>
                    <p>Lorem Ipsum is simply dummy text to print ...</p>
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className="img">
                <Link href="#">
                  <a>
                    <img src="/assets/img/trending thumbnail.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link href="#">
                  <a>
                    <p>Lorem Ipsum is simply dummy text to print ...</p>
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className="img">
                <Link href="#">
                  <a>
                    <img src="/assets/img/trending thumbnail.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link href="#">
                  <a>
                    <p>Lorem Ipsum is simply dummy text to print ...</p>
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className="img">
                <Link href="#">
                  <a>
                    <img src="/assets/img/trending thumbnail.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link href="#">
                  <a>
                    <p>Lorem Ipsum is simply dummy text to print ...</p>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <Link href="#">
          <a className="ld-more-btn"> Load More</a>
        </Link>
      </div>
    </>
  );
}

export default LatestNews;
