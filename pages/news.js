import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import he from 'he';

import MostPopular from '../src/Components/MostPopular';
import LatestNews from '../src/Components/LatestNews';
import NewsCards from '../src/Components/NewsCards';
import Error from '../src/pages/Error';

function News(props) {
  if (props.error) {
    return <Error message={props.error} />;
  }
  const [activeMenu, setactiveMenu] = useState(props.activeMenu);
  const [news, setNews] = useState(props.news);
  const [loaded, setLoaded] = useState(props.loaded);

  useEffect(() => {
    async function getNews() {
      if (activeMenu) {
        setLoaded(false);
        axios
          .get(
            'https://www.bdcrictime.com/wp-json/wp/v2/posts?categories=' +
              activeMenu +
              '&_embed'
          )
          .then((res) => {
            setNews(res.data);
            setLoaded(true);
          });
      }
    }
    getNews();

    return () => {
      setLoaded(false);
      setNews([{}, {}, {}, {}]);
    };
  }, [activeMenu]);

  return (
    <>
      <Head>
        <title>News - BDCricTime</title>
      </Head>
      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              {props.menus[0] ? (
                <div className="page-inner-content mb-10">
                  <div className="team-menu">
                    <ul>
                      {props.menus.map((menu, index) => (
                        <li key={index}>
                          <Link href="#">
                            <a
                              onClick={() => setactiveMenu(menu.object_id)}
                              className={
                                menu.object_id === activeMenu
                                  ? 'active-menu'
                                  : null
                              }
                            >
                              {menu.title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
              <div className="news-main-content">
                <div className="news-widget">
                  {news[0] ? (
                    <>
                      <div className="row">
                        {news.map((news, index) =>
                          index < 3 ? (
                            <div key={index} className="col-lg-4 col-md-6">
                              <NewsCards
                                format="boxed-down"
                                headline={loaded ? news.title.rendered : null}
                                thumbnail={
                                  loaded
                                    ? news._embedded['wp:featuredmedia'][0]
                                        .source_url
                                    : null
                                }
                                leadText={
                                  loaded
                                    ? news.acf.lead_text
                                      ? news.acf.lead_text
                                      : he.decode(
                                          news.excerpt.rendered.replace(
                                            /(<([^>]+)>)/gi,
                                            ''
                                          )
                                        )
                                    : null
                                }
                                id={news.id}
                                slug={news.slug}
                              />
                            </div>
                          ) : null
                        )}
                      </div>
                      {news.map((news, index) =>
                        index > 2 ? (
                          <NewsCards
                            key={index}
                            format="boxed-side"
                            headline={loaded ? news.title.rendered : null}
                            thumbnail={
                              loaded
                                ? news._embedded['wp:featuredmedia'][0]
                                    .source_url
                                : null
                            }
                            leadText={
                              loaded
                                ? news.acf.lead_text
                                  ? news.acf.lead_text
                                  : he.decode(
                                      news.excerpt.rendered.replace(
                                        /(<([^>]+)>)/gi,
                                        ''
                                      )
                                    )
                                : null
                            }
                            id={news.id}
                            slug={news.slug}
                          />
                        ) : null
                      )}
                    </>
                  ) : (
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        color: '#cccccc',
                        textAlign: 'center',
                        padding: '100px',
                      }}
                    >
                      NO NEWS IN THIS CATEGORY
                    </div>
                  )}
                  {/* <div className="seemore-btn-inner">
                            <Link href="" ><a className="ld-more-btn">Load More</a></Link>
                            </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar-widget-wrapper">
                <LatestNews />
                <MostPopular />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    const url = 'https://www.bdcrictime.com/wp-json/wp/v2/menus';
    const res = await axios.get(url, param);
    if (res && res.data) {
      const news = await axios.get(
        'https://www.bdcrictime.com/wp-json/wp/v2/posts?categories=' +
          res.data[0].object_id +
          '&_embed',
        param
      );
      return {
        props: {
          menus: res.data,
          activeMenu: res.data[0].object_id,
          news: news.data,
          loaded: true,
        },
      };
    }

    return {
      props: {
        menus: res.data,
        activeMenu: res.data[0].object_id,
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
export default News;
