import { takeEvery, call, put, select } from 'redux-saga/effects';

import { classSagaActions } from "@redux/actions/classActions";
import { updatePage } from "@redux/actions/pageActions";

export function* GetClasses() {
  yield takeEvery(classSagaActions.GET_CLASSES, function* (action) {

    let params;
    params = [{
      path: ["class", "pageLoading"],
      data: true
    }]
    yield put(updatePage(params));

    const teacher = yield select(state => state.user);
    const classes = yield call(teacher.getClasses);
    params = [{
      path: ["class", "classes"],
      data: classes
    }, {
      path: ["class", "pageLoading"],
      data: false
    }];
    yield put(updatePage(params));
  });
}
