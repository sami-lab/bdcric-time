import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import he from 'he';

import MostPopular from '../../../../src/Components/MostPopular';
import LatestNews from '../../../../src/Components/LatestNews';
import NewsCards from '../../../../src/Components/NewsCards';
import Error from '../../../../src/pages/Error';

function Tags(props) {
  if (props.error) {
    return <Error message={props.error} />;
  }
  const history = useRouter();
  const [news, setNews] = useState(props.news);
  const [totalNews, setTotalNews] = useState(
    props.totalNews ? props.totalNews : 0
  );
  const [loaded, setLoaded] = useState(props.loaded);

  useEffect(() => {
    async function getNews() {
      axios
        .get(
          'https://www.bdcrictime.com/wp-json/wp/v2/posts?tags=' +
            history.query.tagId +
            '&_embed'
        )
        .then((res) => {
          setNews(res.data);
          setTotalNews(res.headers['x-wp-total']);
          setLoaded(true);
        });
    }
    getNews();

    return () => {
      setLoaded(false);
      setNews([{}, {}, {}, {}]);
    };
  }, [history.query.tagId]);

  return (
    <>
      <Head>
        <title>
          '{history.query.tag.replace(/-/g, ' ').toUpperCase()}' Related News -
          BDCricTime
        </title>
      </Head>
      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="news-widget">
                <div className="title mb-0">
                  <div className="left">
                    <h6>
                      "{history.query.tag.replace(/-/g, ' ')}" Related News
                    </h6>
                    <span>Total News: {totalNews}</span>
                  </div>
                </div>
              </div>
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
                            <Link to="" className="ld-more-btn">Load More</Link>
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
export async function getServerSideProps({ params }) {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    const res = await axios.get(
      'https://www.bdcrictime.com/wp-json/wp/v2/posts?tags=' +
        params.tagId +
        '&_embed',
      param
    );

    return {
      props: {
        news: res.data,
        totalNews: res.headers['x-wp-total'],
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
export default Tags;
