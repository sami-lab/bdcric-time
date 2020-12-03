import React from 'react';
import Head from 'next/head';

import ICCTeamRanking from '../src/Components/ICCTeamRanking';
import MostPopular from '../src/Components/MostPopular';
import LatestNews from '../src/Components/LatestNews';
import RankingTable from '../src/Components/RankingTable';

function Ranking() {
  return (
    <>
      <Head>
        <title>Ranking - BDCricTime</title>
      </Head>
      {/* news content area start */}
      <div className="news-content-area fx-padding ranking-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="profile-inner-blk">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="top-title-text">
                      <h2>ICC RANKINGS - TEST, ODI, T20</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <RankingTable title="Men's Ranking" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar-widget-wrapper">
                <LatestNews />
                <MostPopular />
                <ICCTeamRanking />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news content area end */}
    </>
  );
}

export default Ranking;
