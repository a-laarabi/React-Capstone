/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGames } from '../../redux/actions';
import GamesItem from './GameItem';

const Games = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();
  dispatch(setGames());

  const filteredGames = games.filter((game) => game.title.toLowerCase());

  return (
    <>
      <div className="content">
        {
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
                <h1>Loading..</h1>
              </div>
            )
          }
      </div>
    </>
  );
};

export default Games;
