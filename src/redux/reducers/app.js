import { handleActions } from 'redux-actions';

import {
  BEGIN_GET_GIFS_TRENDING_GIFS,
  SUCCESS_GET_GIFS_TRENDING_GIFS,
  ERROR_GET_GIFS_TRENDING_GIFS,
  BEGIN_SEARCH_GIF_API,
  SUCCESS_SEARCH_GIF_API,
  ERROR_SEARCH_GIF_API
} from '../types';

let initialState = {
  gifs: [],
  gifsFound: [],
  searchAPI: '',
  filter: { limit: 25, offset: 0, fmt: 'json' }
};

export const app = handleActions(
  {
    [BEGIN_GET_GIFS_TRENDING_GIFS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      return state;
    },
    [SUCCESS_GET_GIFS_TRENDING_GIFS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      for (let gif of action.gifs) {
        state.gifs.push(gif);
      }
      return state;
    },
    [ERROR_GET_GIFS_TRENDING_GIFS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      console.log('ERROR_GET_GIFS_TRENDING_GIFS state', state);
      console.log('ERROR_GET_GIFS_TRENDING_GIFS action', action);
      return state;
    },
    [BEGIN_SEARCH_GIF_API]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      return state;
    },
    [SUCCESS_SEARCH_GIF_API]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.gifs = [];
      for (let gif of action.gifs) {
        state.gifs.push(gif);
      }
      return state;
    },
    [ERROR_SEARCH_GIF_API]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      return state;
    }
  },
  initialState
);
