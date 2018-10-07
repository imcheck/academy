import { takeEvery, put, select, call } from 'redux-saga/effects';
import { push } from "connected-react-router";

import { updateUser, userSagaActions } from '@redux/actions/userActions';
import { Student, Auth } from '@models';

export function* Init() {
  yield takeEvery(userSagaActions.INIT, function* (action) {
    try {
      const user = yield Auth.Authenticate();
      if(!user) {
        yield put(push('/login'));
      }
      const teacher = yield select(state => state.user);
      yield teacher.getClasses();
      yield teacher.getStudents();
      yield teacher.getTeachers();

      const params = {
        teacher
      }
      yield put(updateUser(params));
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