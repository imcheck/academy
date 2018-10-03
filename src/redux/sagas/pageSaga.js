import { takeEvery, put, select, call } from 'redux-saga/effects';

import { pageSagaActions, updatePage } from '@redux/actions/pageActions';
import { getData } from '@redux/actions/requestActions';

export function* Init() {
  yield takeEvery(pageSagaActions.INIT, function* (action) {
    const user = yield select(state => state.user);
    yield put(getData({
      type: "student",
      by: user
    }));
    yield put(getData({
      type: "class",
      by: user
    }));

    yield put(getData({
      type: "teacher",
      by: user
    }));
    try {
    } catch (e) {
      console.log(e.message);
    }
  });
}