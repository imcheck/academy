import { takeEvery, put, select, call } from 'redux-saga/effects';

import { pageSagaActions } from '@redux/actions/pageActions';
import { updateUser } from '@redux/actions/userActions';

export function* Init() {
  yield takeEvery(pageSagaActions.INIT, function* (action) {
    const teacher = yield select(state => state.user);

    yield teacher.getClasses();
    yield teacher.getStudents();

    const params = {
      teacher
    }
    yield put(updateUser(params));

    try {
    } catch (e) {
      console.log(e.message);
    }
  });
}