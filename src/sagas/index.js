import { all, takeEvery } from 'redux-saga/effects';
import getTrendingGifsSaga from './home';

// export function* getTrendingGifs(limit = 25, offset = 0, fmt = 'json') {
//   try {
//     let gifs = yield fetch(
//       `${process.env.REACT_APP_GIPHY_API_URL}trending?api_key=${
//         process.env.REACT_APP_GIPHY_API_KEY
//       }&limit=${limit}&offset=${offset}&fmt=${fmt}`
//     );
//     let response = yield gifs.json();
//     console.log('response', JSON.stringify(response.data, null, 2));
//     // TODO: SEND DATA TO THE HOME COMPONENT
//   } catch (e) {
//     console.error(e);
//   }
// }

export default function* rootSaga() {
  yield all([
    //add your sagas here:
    getTrendingGifsSaga()
  ]);
}
