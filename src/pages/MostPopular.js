import React from 'react';
import Link from 'next/link';

function MostPopular() {
  return (
    <>
      <div className="sidebar-widget popular-widget">
        <h4 className="heading-title">Most Popular</h4>
        <div>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link href="#nav-7">
              <a className="nav-item nav-link active" data-toggle="tab">
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
                      <p>Lorem Ipsum is simply dummy ..</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <span>3</span>
                  <Link href="#">
                    <a>
                      <p>
                        Lorem int and typesetting int and typesetting int and
                        typesetting int and typesetting...
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
    </>
  );
}

export default MostPopular;
