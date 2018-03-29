import { call, takeEvery, put, select } from 'redux-saga/effects';
import { getTrendingGifs } from '../api/giphy';
import { fetchTrendingGifsCompleted, fetchTrendingGifsFailed } from '../redux/actions';

import { BEGIN_GET_GIFS_TRENDING_GIFS } from '../redux/types';

export function* loadTrendingGifs() {
  try {
    const filter = yield select(({ app }) => app.filter);
    const gifs = yield call(getTrendingGifs, filter);
    yield put(fetchTrendingGifsCompleted(gifs.data));
  } catch (e) {
    yield put(fetchTrendingGifsFailed(e));
  }
}

export default function* getTrendingGifsSaga() {
  yield takeEvery(BEGIN_GET_GIFS_TRENDING_GIFS, loadTrendingGifs);
}
