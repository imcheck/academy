import { takeEvery, call, put, select } from 'redux-saga/effects';

import { lectureSagaActions } from "@redux/actions/lectureActions";
import { updatePage } from "@redux/actions/pageActions";

export function* GetLectures() {
  yield takeEvery(lectureSagaActions.GET_LECTURES, function* (action) {

    let params;
    params = [{
      path: ["lecture", "pageLoading"],
      data: true
    }]
    yield put(updatePage(params));

    const teacher = yield select(state => state.user);
    const lectures = yield call(teacher.getLectures);
    params = [{
      path: ["lecture", "lectures"],
      data: lectures
    }, {
      path: ["lecture", "pageLoading"],
      data: false
    }];
    yield put(updatePage(params));
  });
}
