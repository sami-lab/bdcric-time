import React from 'react';
import Link from 'next/link';

function RecentSeries() {
  return (
    <>
      <div className="sidebar-widget recend-widget">
        <h4 className="heading-title">Recent Series</h4>
        <nav>
          <ul>
            <li>
              <span>
                <img src="/assets/img/recent-svg.svg" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>India v Bangladesh</p>
                </a>
              </Link>
            </li>
            <li>
              <span>
                <img src="/assets/img/recent-svg.svg" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>India v Bangladesh</p>
                </a>
              </Link>
            </li>
            <li>
              <span>
                <img src="/assets/img/recent-svg.svg" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>India v Bangladesh</p>
                </a>
              </Link>
            </li>
            <li>
              <span>
                <img src="/assets/img/recent-svg.svg" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>India v Bangladesh</p>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default RecentSeries;
