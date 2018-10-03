import { takeEvery, put, select, call } from 'redux-saga/effects';

import { pageSagaActions } from '@redux/actions/pageActions';

export function* Init() {
  yield takeEvery(pageSagaActions.INIT, function* (action) {
    try {
    } catch (e) {
      console.log(e.message);
    }
  });
}