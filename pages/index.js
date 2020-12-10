import React from 'react';
import Head from 'next/head';
import axios from 'axios';
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
import Error from '../src/pages/Error';

function Homepage(props) {
  //const history = useRouter();
  //history.pathname will give you current path
  if (props.error) {
    return <Error message={props.error} />;
  }
  return (
    <>
      <Head>
        <title>
          Live Cricket Scores, Latest News of Bangladesh and International
          Cricket - BDCricTime
        </title>
      </Head>
      <LiveScoreSlider liveMatches={props.liveMatches} loaded={props.loaded} />
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
                <LeadSection leadNews={props.leadNews} loaded={props.loaded} />
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

export async function getServerSideProps() {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    var currentDate = new Date();
    var d = new Date(currentDate.setDate(currentDate.getDate() + 1));
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var y = new Date(currentDate.setDate(currentDate.getDate() - 1));
    var month1 = '' + (y.getMonth() + 1);
    var day1 = '' + y.getDate();
    var year1 = y.getFullYear();

    if (month1.length < 2) month1 = '0' + month1;
    if (day1.length < 2) day1 = '0' + day;

    const tom = [year, month, day].join('-');
    const yes = [year1, month1, day1].join('-');

    console.log(yes, tom);

    const res = await axios.get(
      'https://rest.entitysport.com/v2/matches/?per_page=100&date=' +
        yes +
        '_' +
        tom,
      param
    );

    var filtered = res.data.response.items.filter(function (item) {
      return (
        item.competition.country === 'int' ||
        item.competition.country === 'in' ||
        item.competition.country === 'au' ||
        item.competition.country === 'pk'
      );
    });
    var final = filtered.length > 3 ? filtered : res.data.response.items;

    var res1 = await axios.get(
      'https://www.bdcrictime.com/wp-json/acf/v3/posts/152839',
      param
    );

    var res2 = await axios.get(
      'https://www.bdcrictime.com/wp-json/wp/v2/posts/' +
        res1.data.acf.top_news[0] +
        '?_embed',
      param
    );

    return {
      props: {
        liveMatches: final.reverse(),
        leadNews: res2.data,
        loaded: true,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
export default Homepage;
