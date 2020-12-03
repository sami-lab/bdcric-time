import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

function PlayersData() {
  const [players, setPlayers] = useState([{}, {}, {}, {}]);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const fireSearch = (event) => {
    event.preventDefault();
    if (search) {
      setPlayers([{}, {}, {}, {}]);
      axios
        .get(
          'https://rest.entitysport.com/v2/players?search=' +
            search +
            '&paged=1&per_page=10'
        )
        .then(function (res) {
          setPlayers(res.data.response.items);
        });
    }
  };

  async function getPlayers() {
    axios
      .get('https://rest.entitysport.com/v2/players?country=bd', {
        params: { token: '437214169d9be2a73e91d22f76f68b52' },
      })
      .then((res) => {
        setPlayers(res.data.response.items);
      })
      .catch((err) => console.log('Error in PlayerData' + err.message));
  }

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <div className="sidebar-widget player-widget">
        <h4 className="heading-title">Players Data</h4>

        <nav>
          <div className="top-search-bar">
            <form onSubmit={fireSearch}>
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
              <input
                type="text"
                placeholder="Search player"
                value={search}
                onChange={handleSearch}
              />
            </form>
          </div>
          <ul>
            {players.map((item, index) => (
              <li key={index}>
                {item.title ? (
                  <>
                    <span>
                      <img src="/img/player-img.svg" alt={item.title} />
                    </span>
                    <Link
                      href={
                        '/player/profile/' +
                        item.pid +
                        '/' +
                        item.title.toLowerCase().replace(' ', '-')
                      }
                    >
                      <a>
                        <p style={{ marginLeft: '15px' }}>{item.title}</p>{' '}
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <span>
                      <img src="/img/player-img.svg" alt="" />
                    </span>
                    <p style={{ marginLeft: '15px' }}>
                      <Skeleton width={150} />
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PlayersData;
