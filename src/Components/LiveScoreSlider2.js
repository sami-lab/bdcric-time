import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import dateFormat from 'dateformat';
import axios from 'axios';

function LiveScoreSlider2() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [liveMatches, setLiveMatches] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const date = new Date();
    const tomorrow = dateFormat(date.setDate(date.getDate() + 1), 'yyyy-mm-dd');
    const yesterday = dateFormat(
      date.setDate(date.getDate() - 1),
      'yyyy-mm-dd'
    );
    function getLiveMatches(firstReq) {
      axios
        .get(
          'https://rest.entitysport.com/v2/matches/?per_page=100&date=' +
            yesterday +
            '_' +
            tomorrow
        )
        .then((res) => {
          var filtered = res.data.response.items.filter(function (item) {
            return (
              item.competition.country === 'int' ||
              item.competition.country === 'in' ||
              item.competition.country === 'au' ||
              item.competition.country === 'pk'
            );
          });
          var final = filtered.length > 3 ? filtered : res.data.response.items;
          setLiveMatches(final.reverse());
          setLoaded(true);
        });
    }

    getLiveMatches(true);
    const interval = setInterval(() => {
      getLiveMatches(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loaded ? (
        <div className="livescoreslider2">
          <Slider {...settings}>
            {liveMatches.map((item, index) => (
              <div className="item">
                <div className="info">
                  <div className="statusStr">
                    {item.status_str ? item.status_str : null}
                  </div>
                  <div className="venue">
                    {item.venue.name ? item.venue.name : null}
                  </div>
                </div>
                <div className="content">
                  <div className="team">
                    <div className="logo">
                      <img src={item.teama.logo_url} alt={item.teama.name} />
                    </div>
                    <div className="name">{item.teama.short_name}</div>
                    <div className="score">
                      {item.teama.scores ? item.teama.scores : '-/-'}
                      {item.teama.overs
                        ? ' (' + item.teama.overs + ' OVERS' + ')'
                        : ''}
                    </div>
                  </div>
                  <div className="team">
                    <div className="logo">
                      <img src={item.teamb.logo_url} alt={item.teamb.name} />
                    </div>
                    <div className="name">{item.teamb.short_name}</div>
                    <div className="score">
                      {item.teamb.scores ? item.teama.scores : '-/-'}
                      {item.teamb.overs
                        ? ' (' + item.teamb.overs + ' OVERS' + ')'
                        : ''}
                    </div>
                  </div>
                </div>
                <div className="status">
                  {item.status_note ? item.status_note : 'To be played'}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
    </>
  );
}

export default LiveScoreSlider2;
