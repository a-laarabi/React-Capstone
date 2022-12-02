/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGames } from '../../redux/actions';
import GamesItem from './GameItem';

const Games = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGames());
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredGames = games.filter((game) => game.title.toLowerCase()
    .includes(search.toLowerCase()));

  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={handleChange} value={search} />
      </div>
      <div className="content">
        {
          !loading ? (
            filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GamesItem
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  released={game.released}
                  image={game.image}
                  gener={game.gener}
                />
              ))
            ) : (
              <div>
                <h1>There is no game</h1>
              </div>
            )
          ) : (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>

          )
          }
      </div>
    </>
  );
};

export default Games;
