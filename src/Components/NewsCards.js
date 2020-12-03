import React from 'react';
import Link from 'next/link';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import he from 'he';
import Moment from 'react-moment';

function NewsCards(props) {
  return (
    <>
      {props.format === 'lead' ? (
        <Lead {...props} />
      ) : props.format === 'boxed-down' ? (
        <BoxedDown {...props} />
      ) : props.format === 'boxed-side' ? (
        <BoxedSide {...props} />
      ) : props.format === 'small-down' ? (
        <SmallDown {...props} />
      ) : props.format === 'small-side' ? (
        <SmallSide {...props} />
      ) : props.format === 'with-count' ? (
        <WithCount {...props} />
      ) : (
        'Please Insert Card Format'
      )}
    </>
  );
}

function Lead(props) {
  return (
    <>
      <div className="post">
        <div className="img">
          <Link
            href={
              props.id && props.slug
                ? '/news/details/' + props.id + '/' + props.slug
                : ''
            }
          >
            <a>
              <img
                src={
                  props.thumbnail ? props.thumbnail : '/img/post-thumbnail.svg'
                }
                alt={props.imageAlt ? props.imageAlt : ''}
              />
            </a>
          </Link>
        </div>
        <div className="content">
          <Link
            href={
              props.id && props.slug
                ? '/news/details/' + props.id + '/' + props.slug
                : ''
            }
          >
            <a>
              <h4>
                {props.headline ? he.decode(props.headline) : <Skeleton />}
              </h4>
            </a>
          </Link>
          <p>
            {props.leadText ? (
              <>
                {props.leadText}...{' '}
                <Link
                  href={
                    props.id && props.slug
                      ? '/news/details/' + props.id + '/' + props.slug
                      : ''
                  }
                >
                  <a className="read-more"> Read Ful Article</a>
                </Link>
              </>
            ) : (
              <Skeleton count={3} />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

function BoxedDown(props) {
  return (
    <>
      <SkeletonTheme
        color="rgba(255, 255, 255, .1)"
        highlightColor="rgba(255, 255, 255, .05)"
      >
        <div className="post2">
          <div className="img">
            <Link
              href={
                props.id && props.slug
                  ? '/news/details/' + props.id + '/' + props.slug
                  : ''
              }
            >
              <a>
                <img
                  src={
                    props.thumbnail
                      ? props.thumbnail
                      : '/img/newsupdate thumbnail.svg'
                  }
                  alt={props.imageAlt ? props.imageAlt : ''}
                />
              </a>
            </Link>
          </div>
          <div className="content">
            <Link
              href={
                props.id && props.slug
                  ? '/news/details/' + props.id + '/' + props.slug
                  : ''
              }
            >
              <a>
                <h5>
                  {props.headline ? (
                    he.decode(props.headline)
                  ) : (
                    <Skeleton count={2} />
                  )}
                </h5>
              </a>
            </Link>
            <p>
              {props.leadText ? (
                props.leadText.slice(0, 240) + '...'
              ) : (
                <Skeleton count={7} />
              )}
            </p>
            {props.leadText ? (
              <Link
                href={
                  props.id && props.slug
                    ? '/news/details/' + props.id + '/' + props.slug
                    : ''
                }
              >
                <a className="read-more"> READ MORE</a>
              </Link>
            ) : null}
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}

function BoxedSide(props) {
  return (
    <>
      <SkeletonTheme
        color="rgba(255, 255, 255, .1)"
        highlightColor="rgba(255, 255, 255, .05)"
      >
        <div className="post3 ">
          <div className="row" style={{ width: '110%' }}>
            <div className=" col-sm-4">
              <div className="img">
                <Link
                  href={
                    props.id && props.slug
                      ? '/news/details/' + props.id + '/' + props.slug
                      : ''
                  }
                >
                  <a>
                    <img
                      src={
                        props.thumbnail ? props.thumbnail : '/img/post-img2.png'
                      }
                      alt={props.imageAlt ? props.imageAlt : ''}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="content">
                <Link
                  href={
                    props.id && props.slug
                      ? '/news/details/' + props.id + '/' + props.slug
                      : ''
                  }
                >
                  <a>
                    <h5>
                      {props.headline ? (
                        he.decode(props.headline)
                      ) : (
                        <Skeleton />
                      )}
                    </h5>
                  </a>
                </Link>
                <p>
                  {props.leadText ? (
                    props.leadText + '...'
                  ) : (
                    <Skeleton count={4} />
                  )}
                </p>
                <Link
                  href={
                    props.id && props.slug
                      ? '/news/details/' + props.id + '/' + props.slug
                      : ''
                  }
                >
                  <a className="read-more"> READ MORE</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}

function SmallDown(props) {
  return (
    <>
      <div className="post4 col-md-4 col-6">
        <div className="img">
          <Link
            href={
              props.id && props.slug
                ? '/news/details/' + props.id + '/' + props.slug
                : ''
            }
          >
            <a>
              <img
                src={
                  props.thumbnail
                    ? props.thumbnail
                    : '/assets/img/post-img3.svg'
                }
                alt={props.imageAlt ? props.imageAlt : ''}
              />
            </a>
          </Link>
        </div>
        <div className="content">
          <Link
            href={
              props.id && props.slug
                ? '/news/details/' + props.id + '/' + props.slug
                : ''
            }
          >
            <a>
              <h6>
                {props.headline ? (
                  he.decode(props.headline)
                ) : (
                  <Skeleton count={2} />
                )}
              </h6>
            </a>
          </Link>
          <span style={{ textTransform: 'uppercase' }}>
            {props.published ? (
              <Moment format="DD MMM YYYY">{props.published}</Moment>
            ) : (
              <Skeleton />
            )}
          </span>
        </div>
      </div>
    </>
  );
}

function SmallSide(props) {
  return (
    <>
      <li>
        <div className="img">
          <Link
            href={
              props.id && props.slug
                ? '/news/details/' + props.id + '/' + props.slug
                : ''
            }
          >
            <a>
              {props.thumbnail ? (
                <img
                  src={props.thumbnail}
                  alt={props.imageAlt ? props.imageAlt : ''}
                />
              ) : (
                <Skeleton height={'50px'} width={'50px'} />
              )}
            </a>
          </Link>
        </div>
        <div className="content">
          <Link
            href={
              props.id && props.slug
                ? '/news/details/' + props.id + '/' + props.slug
                : ''
            }
          >
            <a>
              <p>
                {props.headline ? (
                  he.decode(props.headline)
                ) : (
                  <Skeleton count={2} width={'80%'} />
                )}
              </p>
            </a>
          </Link>
        </div>
      </li>
    </>
  );
}

function WithCount(props) {
  return (
    <>
      <li>
        <span>
          {props.count ? props.count : <Skeleton width="30px" height="30px" />}
        </span>
        <Link
          href={
            props.id && props.slug
              ? '/news/details/' + props.id + '/' + props.slug
              : ''
          }
        >
          <a>
            <p>
              {props.headline ? (
                he.decode(props.headline)
              ) : (
                <Skeleton count={2} width={'80%'} />
              )}
            </p>
          </a>
        </Link>
      </li>
    </>
  );
}

export default NewsCards;
