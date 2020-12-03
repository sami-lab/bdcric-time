import React from 'react';
import Link from 'next/link';

function Highlights(props) {
  return (
    <>
      <div className="hlt-text">
        <h4>Highlights</h4>
        <div className="hlt-text-list">
          {props.news && props.news[0]
            ? props.news.map((news, index) => (
                <li>
                  <Link
                    href={'/news/details/' + news.ID + '/' + news.post_name}
                  >
                    <a> {news.post_title}</a>
                  </Link>
                </li>
              ))
            : 'Please provide at least one news'}
        </div>
      </div>
    </>
  );
}

export default Highlights;
