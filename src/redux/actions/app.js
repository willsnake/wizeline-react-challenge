import { createAction } from 'redux-actions';

import {
  BEGIN_GET_GIFS_TRENDING_GIFS,
  SUCCESS_GET_GIFS_TRENDING_GIFS,
  ERROR_GET_GIFS_TRENDING_GIFS
} from '../types';

export const fetchTrendingGifs = filter => ({
  type: BEGIN_GET_GIFS_TRENDING_GIFS,
  filter
});

export const fetchTrendingGifsCompleted = gifs => ({
  type: SUCCESS_GET_GIFS_TRENDING_GIFS,
  gifs
});

export const fetchTrendingGifsFailed = error => ({
  type: ERROR_GET_GIFS_TRENDING_GIFS,
  error
});
