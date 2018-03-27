import { BEGIN_GET_GIFS_TRENDING_GIFS } from '../types';

export function app(state = {}, action = {}) {
  switch (action.type) {
    case BEGIN_GET_GIFS_TRENDING_GIFS:
      return action.payload;
    default:
      return state;
  }
}
