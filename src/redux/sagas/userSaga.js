import { takeEvery, put, select, call } from 'redux-saga/effects';

import { pageSagaActions, init } from '@redux/actions/pageActions';
import { updateUser, userSagaActions } from '@redux/actions/userActions';
import { Student } from '@models';

export function* Init() {
  yield takeEvery(pageSagaActions.INIT, function* (action) {
    try {
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
    if(student.studentId) yield Student.Update(student);
    else yield Student.Insert(student);
    yield put(init());
  });
}