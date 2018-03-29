import { all } from 'redux-saga/effects';
import getTrendingGifsSaga from './home';
import searchGIFAPISaga from './searchGIFAPI';

export default function* rootSaga() {
  yield all([getTrendingGifsSaga(), searchGIFAPISaga()]);
}
