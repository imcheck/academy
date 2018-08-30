import { takeEvery, put, select } from 'redux-saga/effects';

import { pageSagaActions, updatePage } from '@redux/actions/pageActions';

export function* Init() {
  yield takeEvery(pageSagaActions.INIT, function* (action) {
    try {
    } catch(e) {
      console.log(e.message);
    }
  });
}