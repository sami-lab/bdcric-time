import React, { useState, useEffect } from 'react';
import NewsCards from '../Components/NewsCards';
import axios from 'axios';
import Link from 'next/link';

function LatestNews() {
  const [news, setNews] = useState([{}, {}, {}, {}, {}]);
  const [loaded, setLoaded] = useState(false);

  async function getNews() {
    axios
      .get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=5&_embed', {
        params: { token: '437214169d9be2a73e91d22f76f68b52' },
      })
      .then((res) => {
        setNews(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log('Error in Live News' + err.message));
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="sidebar-widget trend-widget">
        <h4 className="heading-title">Latest News</h4>

        <nav>
          <ul>
            {news.map((news, index) => (
              <NewsCards
                key={index}
                format="small-side"
                headline={loaded ? news.title.rendered : null}
                thumbnail={
                  loaded
                    ? news._embedded['wp:featuredmedia'][0].source_url
                    : null
                }
                id={news.id}
                slug={news.slug}
              />
            ))}
          </ul>
        </nav>
        <Link href="/news">
          <a className="ld-more-btn"> Load More</a>
        </Link>
      </div>
    </>
  );
}

export default LatestNews;
