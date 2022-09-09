/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import types from './actionTypes';

const URL = 'https://api.rawg.io/api';
const API_KEY = '6b2632491420425bb6bc1bfb81341be8';

export const setGames = createAsyncThunk(types.SET_GAMES,
  async () => {
    const { data } = await axios.get(`${URL}/games?key=${API_KEY}`);
    const games = data.results.map((game) => ({
      id: game.id,
      title: game.name,
      image: game.background_image,
      gener: game.genres.map((genre) => genre.name).join(', '),
      released: game.released,
      platphorm: game.platforms.map((platform) => platform.platform.name).join(', '),
      year_start: game.released.split('-')[0],
      playtime: game.playtime,
      updated: game.updated,
      suggestions_count: game.suggestions_count,
      rating: game.rating,
      tags: game.tags.map((tag) => tag.name).join(', ').split(', ', 5).join(', '),
      stores: game.stores.map((store) => store.store.name).join(', '),
    }));
    return games;
  });

// export default setGames;
