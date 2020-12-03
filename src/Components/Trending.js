import React, { useState, useEffect } from 'react';
import NewsCards from '../Components/NewsCards';
import axios from 'axios';

function Trending(props) {
  const [news, setNews] = useState([{}, {}]);
  const [loaded, setLoaded] = useState(false);

  async function getNews() {
    axios
      .get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=2&_embed', {
        params: { token: '437214169d9be2a73e91d22f76f68b52' },
      })
      .then((res) => {
        setNews(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log('Error in Trending' + err.message));
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="sidebar-widget trend-widget">
        <h4 className="heading-title">Trending Now</h4>

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
      </div>
    </>
  );
}

export default Trending;
