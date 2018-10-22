import { takeEvery, put, select, call } from 'redux-saga/effects';
import { push } from "connected-react-router";
import Jwt from "jsonwebtoken";

import { updateUser, userSagaActions } from '@redux/actions/userActions';
import { updatePage } from '@redux/actions/pageActions';
import { Teacher } from "@models";
import * as TeacherService from "@services/teacher";
import * as Auth from "@services/auth";

export function* Init() {
  yield takeEvery(userSagaActions.INIT, function* (action) {
    try {
      let params;
      params = [{
        path: ["pageLoading"],
        data: true
      }];
      yield put(updatePage(params));

      if (yield call(Auth.authIdToken)) {
        const teacher = yield select(state => state.user);
        if(!teacher.email) {
          const decoded = Jwt.decode(localStorage.getItem("id_token"));
          const result = yield call(TeacherService.getTeachers, decoded.email);
          if(result.status == 200) {
            const newTeacher = new Teacher(result.data);
            params = { teacher: newTeacher };
            yield put(updateUser(params));
          } else {
            yield put(push("/login"));
          }
        }
        params = [{
          path: ["pageLoading"],
          data: false
        }];
        yield put(updatePage(params));
      }
      else {
        yield put(push("/login"));
      }
    } catch (e) {
      console.log(e);
    }
  });
}

export function* UpsertStudent() {
  yield takeEvery(userSagaActions.INSERT_OR_UPSERT_STUDENT, function* (action) {
    const { student } = action.params;
    if (student.studentId) yield student.update();
    else yield student.insert();
    yield put(init());
  });
}
 