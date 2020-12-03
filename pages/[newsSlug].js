import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import dateformat from 'dateformat';
import he from 'he';

import Advertisement from '../src/Components/Advertisement';
import LiveScoreSlider from '../src/Components/LiveScoreSlider';
import ICCTeamRanking from '../src/Components/ICCTeamRanking';
import MostPopular from '../src/Components/MostPopular';
import Trending from '../src/Components/Trending';
import PlayersData from '../src/Components/PlayersData';
import LatestNews from '../src/Components/LatestNews';
import RelatedNews from '../src/pages/RelatedNews';
import { isMobile } from 'react-device-detect';

function NewsDetails(props) {
  //IF THIS(error) PROPS AVAILABLE YOU CAN RENDER ERROR VIEW ANYWHERE
  //INSTEAD OF YOUR MAIN DATA
  if (props.error) {
    return <Error message={props.error} />;
  }
  const history = useRouter();
  const [news, setNews] = useState(props.news);
  const [loaded, setLoaded] = useState(props.loaded);
  const [commntsLoaded, setCommentsLoaded] = useState(props.commntsLoaded);

  const [commentSort, setCommentSort] = useState('new');
  const [comment, setComment] = useState(null);
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {
    async function getNews() {
      axios
        .get(
          'https://www.bdcrictime.com/wp-json/wp/v2/posts?slug=' +
            history.query.newsSlug +
            '&_embed'
        )
        .then((res2) => {
          setNews(res2.data[0]);
          setLoaded(true);
        });

      axios
        .get('https://api.shadowbangladesh.com/get_comment', {
          params: {
            url: history.pathname,
          },
        })
        .then((res) => {
          setComments(res.data);
          setCommentsLoaded(true);
        });
    }
    getNews();
  }, [history.pathname, history.query.newsSlug]);

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    axios
      .get('https://api.shadowbangladesh.com/post_comment', {
        params: {
          name: 'Unknown',
          url: history.pathname,
          comment: comment,
          parent: null,
        },
      })
      .then((res) => {
        setComments(res.data);
      });
  };

  return (
    <>
      <Head>
        <title>
          {loaded ? he.decode(news.title.rendered) + ' - BDCricTime' : null}
        </title>
      </Head>
      <LiveScoreSlider />
      <div className="news-content-area fx-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="sidebar-widget-wrapper">
                {isMobile ? <RelatedNews /> : null}
                {isMobile ? null : <Trending />}
                {isMobile ? null : <ICCTeamRanking />}
                {isMobile ? null : <PlayersData />}
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="news-main-content">
                {/* Post content start */}
                <div className="post-content-inner-blk">
                  <div className="sigle-post-wrp">
                    <div className="single-post-top-blk">
                      <h3>
                        {loaded ? (
                          he.decode(news.title.rendered)
                        ) : (
                          <Skeleton count={2} />
                        )}
                      </h3>
                      <p>
                        {loaded ? (
                          he.decode(
                            news.acf.lead_text
                              ? news.acf.lead_text
                              : news.excerpt.rendered.replace(/<[^>]*>?/gm, '')
                          )
                        ) : (
                          <Skeleton count={3} />
                        )}
                      </p>
                      <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        {isMobile ? (
                          <Advertisement
                            size={320100}
                            imgstyle={{ width: '100%' }}
                          />
                        ) : (
                          <Advertisement size={46860} />
                        )}
                      </div>
                    </div>
                    <div className="single-post-tm">
                      <img
                        src={
                          loaded
                            ? news._embedded['wp:featuredmedia'][0].source_url
                            : '/img/post-thumbnail.svg'
                        }
                        alt=""
                      />
                      <p>
                        {loaded
                          ? he.decode(
                              news._embedded[
                                'wp:featuredmedia'
                              ][0].caption.rendered.replace(/(<([^>]+)>)/gi, '')
                            )
                          : null}
                      </p>
                    </div>
                    <div className="post-writer-blk">
                      <div className="post-writer-info">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="pst-w-left-blk">
                              <img
                                src={
                                  loaded
                                    ? news.acf.avatar
                                      ? news.acf.avatar
                                      : '/img/avater.svg'
                                    : '/img/avater.svg'
                                }
                                alt=""
                              />
                              <div className="post-auth-info">
                                <h3>
                                  {loaded ? (
                                    news.acf.reporter_name ? (
                                      news.acf.reporter_name
                                    ) : (
                                      news._embedded.author[0].name
                                    )
                                  ) : (
                                    <Skeleton width={100} />
                                  )}
                                  <span>
                                    {loaded ? (
                                      news.acf.designation
                                    ) : (
                                      <Skeleton width={60} />
                                    )}
                                  </span>
                                </h3>
                                <p>
                                  {loaded ? (
                                    'BDCricTime English'
                                  ) : (
                                    <Skeleton width={80} />
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="pst-w-right-blk">
                              <p>
                                {loaded ? (
                                  <>
                                    Editor -{' '}
                                    <Link
                                      href={
                                        '/news/author/' +
                                        news.author +
                                        '/' +
                                        news._embedded.author[0].name
                                      }
                                    >
                                      <a>{news._embedded.author[0].name}</a>
                                    </Link>
                                  </>
                                ) : (
                                  <Skeleton width="70%" />
                                )}
                              </p>
                              <p>
                                {loaded ? (
                                  'Posted - ' +
                                  dateformat(
                                    news.date,
                                    'mmmm dd, yyyy hh:MM TT'
                                  )
                                ) : (
                                  <Skeleton width="70%" />
                                )}
                              </p>
                              <p>
                                {loaded ? (
                                  'Updated - ' +
                                  dateformat(
                                    news.modified,
                                    'mmmm dd, yyyy hh:MM TT'
                                  )
                                ) : (
                                  <Skeleton width="70%" />
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-main-content-all">
                        <div className="row">
                          <div className="col-lg-12">
                            {loaded ? (
                              news.acf.highlights ? (
                                <div className="hlt-text">
                                  <h4>Highlights</h4>
                                  <div className="hlt-text-list">
                                    {news.acf.highlights.map((news, index) => (
                                      <li>
                                        <Link href={'/' + news.post_name}>
                                          <a> {news.post_title}</a>
                                        </Link>
                                      </li>
                                    ))}
                                  </div>
                                </div>
                              ) : null
                            ) : null}
                            {loaded ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: news.content.rendered,
                                }}
                              />
                            ) : (
                              <Skeleton count={7} />
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="share-btn">
                              {loaded ? (
                                <>
                                  <Link
                                    href={
                                      '/redirect?url=https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000' +
                                      history.asPath
                                    }
                                  >
                                    <a target="_blank">
                                      <img
                                        src="/assets/img/fb_share.svg"
                                        alt=""
                                      />
                                    </a>
                                  </Link>
                                  <Link
                                    href={
                                      '/redirect?url=http://twitter.com/share?text=' +
                                      news.acf.lead_text
                                        ? news.acf.lead_text
                                        : news.excerpt.rendered +
                                          '&url=' +
                                          history.pathname +
                                          '&hashtags=bdcrictime'
                                    }
                                  >
                                    <a target="_blank">
                                      <img
                                        src="/assets/img/twitte.svg"
                                        alt=""
                                      />
                                    </a>
                                  </Link>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tags-btn">
                              {loaded && news._embedded['wp:term'][1][0] ? (
                                <>
                                  <span>Tags</span>
                                  {news._embedded['wp:term'][1].map(
                                    (tag, index) =>
                                      index < 4 ? (
                                        <Link
                                          key={index}
                                          href={
                                            '/news/tag/' +
                                            tag.id +
                                            '/' +
                                            tag.slug
                                          }
                                        >
                                          <a> {tag.name}</a>
                                        </Link>
                                      ) : null
                                  )}
                                </>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="comment-wrp">
                              <div className="comment-box">
                                <form action="">
                                  <textarea
                                    cols={30}
                                    rows={10}
                                    placeholder="Type your comment here..."
                                    defaultValue=""
                                    onChange={handleComment}
                                  >
                                    {comment}
                                  </textarea>
                                  <div className="bottom-action-btns">
                                    {/* To post a comment please
                                        <Link href="/login"><a>Login</a></Link>
                                        or  */}
                                    <button
                                      type="button"
                                      onClick={handleCommentSubmit}
                                    >
                                      Post as anonymous
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div className="comment-main-blk">
                                {commntsLoaded && comments[0] ? (
                                  <>
                                    <h3
                                      style={{ cursor: 'pointer' }}
                                      onClick={() =>
                                        setCommentSort(
                                          commentSort === 'new' ? 'old' : 'new'
                                        )
                                      }
                                    >
                                      <img
                                        src="/assets/img/srt.svg"
                                        style={{
                                          transform:
                                            commentSort === 'old'
                                              ? 'rotate(180deg)'
                                              : null,
                                        }}
                                        alt=""
                                      />
                                      Sort by{' '}
                                      {commentSort === 'new' ? 'New' : 'Old'}
                                    </h3>
                                    {comments.map((comment) => (
                                      <div className="comment-text-blk">
                                        <div className="cm-user">
                                          <img src="/img/avater.svg" alt="" />
                                          <div className="cm-info">
                                            <h4>
                                              {comment.name}{' '}
                                              <span>20 mar 2020</span>
                                            </h4>
                                          </div>
                                        </div>
                                        <p>{comment.comment}</p>
                                        <div className="comment-actions">
                                          <Link href="#">
                                            <a>Delete</a>
                                          </Link>
                                          <Link href="#">
                                            <a>Reply</a>
                                          </Link>
                                          <Link href="#">
                                            <a className="t-up">
                                              <i className="fas fa-thumbs-up" />{' '}
                                              <span>10</span>
                                            </a>
                                          </Link>
                                          <Link href="#">
                                            <a className="t-dn">
                                              <i className="fas fa-thumbs-down" />{' '}
                                              <span>10</span>
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                ) : null}
                              </div>
                            </div>
                            {/* <div className="ld-more-btn cmnt">
                                    <Link href="#"><a>Lode More <i className="fal fa-angle-down" /></a></Link>
                                </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-3 order-lg-3">
              <div className="sidebar-widget-wrapper">
                <Advertisement size={320100} style={{ marginBottom: '15px' }} />
                <LatestNews />
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
export async function getServerSideProps({ req, params }) {
  try {
    const param = {
      params: { token: '437214169d9be2a73e91d22f76f68b52' },
    };
    const url =
      'https://www.bdcrictime.com/wp-json/wp/v2/posts?slug=' +
      params.newsSlug +
      '&_embed';
    const res = await axios.get(url, param);

    const res2 = await axios.get(
      'https://api.shadowbangladesh.com/get_comment',
      {
        params: {
          url: req.url,
          token: '437214169d9be2a73e91d22f76f68b52',
        },
      }
    );

    return {
      props: {
        news: res.data[0],
        comment: res2.data,
        commntsLoaded: true,
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
export default NewsDetails;
