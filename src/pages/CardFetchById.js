import React, { useEffect, useState } from 'react';
import he from 'he';
import axios from 'axios';
import NewsCards from '../Components/NewsCards';

function CardFetchById(props) {
  const [news, setNews] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getNews() {
      if (typeof props.id === 'number') {
        axios
          .get(
            'https://www.bdcrictime.com/wp-json/wp/v2/posts/' +
              props.id +
              '?_embed'
          )
          .then((res2) => {
            setNews(res2.data);
            setLoaded(true);
          })
          .catch((err) => console.log('Error in CardFetchById' + err.message));
      }
    }
    getNews();
  }, [props.id]);

  return (
    <>
      {loaded ? (
        <NewsCards
          format={props.format}
          id={news.id}
          slug={news.slug}
          thumbnail={
            loaded
              ? news._embedded['wp:featuredmedia'][0].source_url
              : '/img/newsupdate thumbnail.png'
          }
          headline={loaded ? news.title.rendered : null}
          leadText={
            loaded
              ? news.acf.lead_text
                ? news.acf.lead_text
                : he.decode(news.excerpt.rendered.replace(/(<([^>]+)>)/gi, ''))
              : null
          }
        />
      ) : (
        <NewsCards format={props.format} />
      )}
    </>
  );
}

export default CardFetchById;
