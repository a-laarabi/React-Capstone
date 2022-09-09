import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setGames } from '../redux/actions';
import Header from './Header';

const GameDetail = () => {
  const [loading, setLoading] = useState(true);
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGames());
    setLoading(false);
  }, []);

  const { id } = useParams();
  const game = games.find((game) => game.id === +id);
  if (!game) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="gameDetail">
      { !loading ? (
        <>

          <div>
            <Header />
            <div className="detailInfo">
              <ul key={game.id}>
                <li>{game.title}</li>
                <li>{game.gener}</li>
                <li>{game.released}</li>
              </ul>
            </div>
            <img src={game.image} alt={game.title} />
            <div className="imgBack" />
          </div>
          <div className="info">
            <ul key={game.id}>
              <li>
                PLATHPHORMS:
                {' '}
                {game.platphorm}
              </li>
              <li>
                GENRE:
                {' '}
                {game.gener}
              </li>
              <li>
                RELEASE DATE:
                {' '}
                {game.released}
              </li>
              <li>
                YEAR START:
                {' '}
                {game.year_start}
              </li>
              <li>
                UPDATED:
                {' '}
                {game.updated}
              </li>
              <li>
                RATING:
                {' '}
                {game.rating}
              </li>
              <li>
                SUGGESTIONS COUNT:
                {' '}
                {game.suggestions_count}
              </li>
              <li>
                PLAYSTIME:
                {' '}
                {game.playtime}
              </li>
              <li>
                STORES:
                {' '}
                {game.stores}
              </li>
              <li>
                TAGS:
                {' '}
                {game.tags}
              </li>
            </ul>
          </div>
        </>

      ) : (
        <div role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>

  );
};

export default GameDetail;
