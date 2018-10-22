import { takeEvery, call, put } from 'redux-saga/effects';

import { studentSagaActions } from "@redux/actions/studentActions";
import { updatePage } from "@redux/actions/pageActions";
import * as Model from "@models";

export function* GetStudents() {
  yield takeEvery(studentSagaActions.GET_STUDENTS, function* (action) {
    if(action.subject instanceof Model.Teacher) {
      let params;
      params = [{
        path: ["student", "pageLoading"],
        data: true
      }]
      yield put(updatePage(params));

      const teacher = action.subject;
      const students = yield call(teacher.getStudents);
      params = [{
        path: ["student", "students"],
        data: students
      }, {
        path: ["student", "pageLoading"],
        data: false
      }];
      yield put(updatePage(params));

    } else if(action.subject instanceof Model.Class) {
    } else if(action.subject instanceof Model.Student) {
    }
  });
}
