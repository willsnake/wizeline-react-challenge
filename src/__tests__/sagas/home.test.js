import { takeEvery, delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { initialState } from '../../redux/reducers/app';
import { getTrendingGifs } from '../../api/giphy';
import {
  fetchTrendingGifs,
  fetchTrendingGifsCompleted,
  fetchTrendingGifsFailed
} from '../../redux/actions';

import {
  BEGIN_GET_GIFS_TRENDING_GIFS,
  SUCCESS_GET_GIFS_TRENDING_GIFS,
  ERROR_GET_GIFS_TRENDING_GIFS
} from '../../redux/types';

import getTrendingGifsSaga, { loadTrendingGifs } from '../../sagas/home';

//*******************************************************************************************************
describe('>>>getTrendingGifsSaga ', () => {
  const action = { type: BEGIN_GET_GIFS_TRENDING_GIFS, filter: initialState.filter };
  const generator = getTrendingGifsSaga(action);
  it('+++ must call loadTrendingGifs', () => {
    //const generator = testFunction1("Gethyl")
    const testValue = generator.next().value;
    console.log('testValue', testValue);
    expect(testValue).toEqual(takeEvery(BEGIN_GET_GIFS_TRENDING_GIFS, loadTrendingGifs));

    // expect(testValue).toEqual(call(testFunction1, action.output));
  });
  xit('+++ must call a delay 1000', () => {
    //const generator = testFunction1("Gethyl")
    const testValue = generator.next().value;
    expect(testValue).toEqual(call(delay, 1000));
  });
  xit('+++ ASYNC_FETCH_INITIAL action', () => {
    //const generator = testFunction1("Gethyl")
    const testValue = generator.next().value;
    expect(testValue).toEqual(put(asyncFetchInitial()));
  });
  xit('+++ call function to fetch testData.json', () => {
    //const generator = testFunction1("Gethyl")
    const testValue = generator.next().value;
    expect(testValue).toEqual(call(FetchTestData));
  });
  xit('+++ ASYNC_FETCH_SUCCESS action', () => {
    const dummyOutput = 'Dummy Output',
      testValue = generator.next(dummyOutput).value;
    expect(testValue).toEqual(put(asyncFetchSuccess(dummyOutput)));
  });
});
//*******************************************************************************************************
// describe('>>>testFunction1 ', () => {
//   const generator = testFunction1('Gethyl');
//   xit('+++ must call a delay 1000', () => {
//     //const generator = testFunction1("Gethyl")
//     const testValue = generator.next().value;
//     expect(testValue).toEqual(call(delay, 1000));
//   });
//   xit('+++ ASYNC_TEST action', () => {
//     //const generator = testFunction1("Gethyl")
//     const testValue = generator.next().value;
//     expect(testValue).toEqual(put({ type: 'ASYNC_TEST', output: 'ASYNC_TEST -Gethyl' }));
//   });
//   xit('+++ ASYNC_TEST_INITIAL action', () => {
//     //const generator = testFunction1("Gethyl")
//     const testValue = generator.next().value;
//     expect(testValue).toEqual(put(asyncTestInitial()));
//   });
//   xit('+++ ASYNC_TEST_NOACTIONCREATOR action', () => {
//     //const generator = testFunction1("Gethyl")
//     const testValue = generator.next().value;
//     expect(testValue).toEqual(
//       put({
//         type: 'ASYNC_TEST_NOACTIONCREATOR',
//         output: 'This action is not present in ActionCreator'
//       })
//     );
//   });
// });
//*******************************************************************************************************
