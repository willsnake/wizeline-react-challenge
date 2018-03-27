import { createAction } from 'redux-actions';

const CRYPTO_PRICES_FETCHED = 'CRYPTO_PRICES_FETCHED';
const CRYPTO_PRICES_GET = 'CRYPTO_PRICES_GET';

const fetchedCryptoPrices = createAction(CRYPTO_PRICES_FETCHED);
const getCryptoPrices = (payload = {}) => ({ type: CRYPTO_PRICES_GET, payload });

export default {
  types: {
    CRYPTO_PRICES_FETCHED,
    CRYPTO_PRICES_GET
  },
  creators: {
    fetchedCryptoPrices,
    getCryptoPrices
  }
};

// import { ADD_TABLE_ITEMS, GOTO_TABLE_PAGE, COUNT_TABLE_ITEMS } from '../types';
// import { createAction } from 'redux-actions';
// import { fetchAdminList } from './';

// export const addTableItems = createAction(ADD_TABLE_ITEMS, (location, items) => ({ location, items }));
// export const countTableItems = createAction(COUNT_TABLE_ITEMS, (location, count) =>  ({ location, count }));
// export const gotoTablePage = (location, page) => {
//     return (dispatch, getState) => {

//         dispatch({
//             type: GOTO_TABLE_PAGE,
//             payload: { location, page }
//         });

//         fetchAdminList()(dispatch, getState);
//     }
// }
