import React from 'react';
import Link from 'next/link';

import LatestNews from '../src/Components/LatestNews';
import MostPopular from '../src/pages/MostPopular';
import Error from '../src/pages/Error';

// import $ from "jquery";
// import '../assets/js/jquery.nice-select';

function Stats(props) {
  return (
    <>
      <div className="inner-page-hero-area  fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="inner-page-hero-content"
                style={{ backgroundImage: 'url(/assets/img/event-page.jpg)' }}
              >
                <div className="ev-iiner">
                  <img src="/assets/img/ev-logo.png" alt="" />
                  <h2>U-19 Cricket World Cup</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="page-inner-content">
                <div className="team-menu">
                  <ul>
                    <li>
                      <Link href="#">
                        <a> News</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Groups</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Fixture</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Results</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a> Standings</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="active-menu"> Stats</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-main-content">
                <div className="news-widget tbl-responsive-purpose">
                  <div className="single-group-list stats">
                    <div className="cat-select">
                      <select name="id">
                        <option value>Most Runs</option>
                        <option value>Most Wickets</option>
                        <option value>Most Sixes</option>
                        <option value>Most 100s</option>
                        <option value>Most 50s</option>
                        <option value>Most Runs</option>
                        <option value>Fastest 100s</option>
                      </select>
                    </div>
                    <div className="grp-table">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Matches</th>
                            <th className="d-n">Innings</th>
                            <th className="d-n">H/S</th>
                            <th className="d-n">Avg</th>
                            <th className="d-n">50s/100s</th>
                            <th className="d-n">4s/6s</th>
                            <th>Runs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="single-group-list stats">
                    <div className="cat-select">
                      <select name id>
                        <option value>Most Runs</option>
                        <option value>Most Wickets</option>
                        <option value>Most Sixes</option>
                        <option value>Most 100s</option>
                        <option value>Most 50s</option>
                        <option value>Most Runs</option>
                        <option value>Fastest 100s</option>
                      </select>
                    </div>
                    <div className="grp-table">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Matches</th>
                            <th className="d-n">Innings</th>
                            <th className="d-n">H/S</th>
                            <th className="d-n">Avg</th>
                            <th className="d-n">50s/100s</th>
                            <th className="d-n">4s/6s</th>
                            <th>Runs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              <img src="assets/img/player-1.png" alt="" />
                              <strong>Batsman Name</strong>
                            </td>
                            <td>3</td>
                            <td className="d-n">3</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">0</td>
                            <td className="d-n">+3.598</td>
                            <td>6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <LatestNews />
              <MostPopular />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
