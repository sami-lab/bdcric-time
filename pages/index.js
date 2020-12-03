import React from 'react';
import Head from 'next/head';
//import { useRouter } from 'next/router';
import Trending from '../src/Components/Trending';
import LiveScoreSlider from '../src/Components/LiveScoreSlider';
import RecentSeries from '../src/Components/RecentSeries';
import PlayersData from '../src/Components/PlayersData';
import ICCTeamRanking from '../src/Components/ICCTeamRanking';
import Advertisement from '../src/Components/Advertisement';
import LeadSection from '../src/pages/LeadSection';
import MostPopular from '../src/pages/MostPopular';
import RelatedNews from '../src/pages/RelatedNews';
import FeaturedCategory from '../src/pages/FeaturedCategory';
import NewsUpdates from '../src/pages/NewsUpdates';

function Homepage() {
  //const history = useRouter();
  //history.pathname will give you current path
  return (
    <>
      <Head>
        <title>
          Live Cricket Scores, Latest News of Bangladesh and International
          Cricket - BDCricTime
        </title>
      </Head>
      <LiveScoreSlider />
      {/* news content area start */}
      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="sidebar-widget-wrapper sticky">
                <Trending />
                <RecentSeries />
                <PlayersData />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="news-main-content">
                <LeadSection />
                <div className="news-widget">
                  <div className="title mb-0">
                    <Advertisement
                      size={46860}
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    />
                  </div>
                </div>
                <NewsUpdates />
                <FeaturedCategory />
                <RelatedNews />
              </div>
            </div>
            <div className="col-lg-3 order-3 order-lg-3">
              <div className="sidebar-widget-wrapper sticky">
                <Advertisement
                  size={320100}
                  style={{ marginBottom: '15px' }}
                  imgstyle={{ width: '100%' }}
                />
                <ICCTeamRanking />
                <MostPopular />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news content area end */}
    </>
  );
}

export default Homepage;
