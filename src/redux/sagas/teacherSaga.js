import { takeEvery, call, put, select } from 'redux-saga/effects';

import { teacherSagaActions } from "@redux/actions/teacherActions";
import { updatePage } from "@redux/actions/pageActions";

export function* GetTeachers() {
  yield takeEvery(teacherSagaActions.GET_TEACHERS, function* (action) {
    let params;
    params = [{
      path: ["teacher", "pageLoading"],
      data: true
    }]
    yield put(updatePage(params));

    const teacher = yield select(state => state.user);
    const teachers = yield call(teacher.getTeachers);
    params = [{
      path: ["teacher", "teachers"],
      data: teachers
    }, {
      path: ["teacher", "pageLoading"],
      data: false
    }];
    yield put(updatePage(params));

  });
}
