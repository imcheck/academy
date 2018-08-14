import { takeEvery, put, select } from 'redux-saga/effects';

import { pageSagaActions, updatePage } from '@redux/actions/pageActions';

import HomeText from '@components/HomeText';

export function* Init() {
  yield takeEvery(pageSagaActions.INIT, function* (action) {
    try {
      console.log("Home에 처음으로 진입");
      const params = {
        path: ["component"],
        data: HomeText
      }
      yield put(updatePage(params))
    } catch(e) {
      console.log(e.message);
    }
  });
}