import React from 'react';
import Link from 'next/link';

function PlayersData() {
  return (
    <>
      <div className="sidebar-widget player-widget">
        <h4 className="heading-title">Players Data</h4>
        <nav>
          <div className="top-search-bar">
            <button type="submit">
              <i className="fal fa-search" />
            </button>
            <input type="text" placeholder="Search player" />
          </div>
          <ul>
            <li>
              <span>
                <img src="/assets/img/player-img.png" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>Shakib Al Hasan</p>
                </a>
              </Link>
            </li>
            <li>
              <span>
                <img src="/assets/img/player-img.png" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>Shakib Al Hasan</p>
                </a>
              </Link>
            </li>
            <li>
              <span>
                <img src="/assets/img/player-img.png" alt="" />
              </span>
              <Link href="#">
                <a>
                  <p>Shakib Al Hasan</p>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PlayersData;
