import { takeEvery, put, select, call } from 'redux-saga/effects';

import { updateUser, userSagaActions } from '@redux/actions/userActions';
import { updatePage } from '@redux/actions/pageActions';
import { Student, Auth } from '@models';

export function* Init() {
  yield takeEvery(userSagaActions.INIT, function* (action) {
    try {
      let params;

      params = [{
        path: ["pageLoading"],
        value: true
      }];
      yield put(updatePage(params));

      const teacher = yield select(state => state.user);
      yield teacher.getClasses();
      yield teacher.getStudents();
      yield teacher.getTeachers();

      params = { teacher };
      yield put(updateUser(params));

      params = [{
        path: ["pageLoading"],
        value: false
      }];

      yield put(updatePage(params));

    } catch (e) {
      console.log(e.message);
    }
  });
}

export function* UpsertStudent() {
  yield takeEvery(userSagaActions.INSERT_OR_UPSERT_STUDENT, function* (action) {
    const { student } = action.params;
    if(student.studentId) yield student.update();
    else yield student.insert();
    yield put(init());
  });
}