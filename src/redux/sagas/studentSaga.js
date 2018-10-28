import { takeEvery, call, put, select } from 'redux-saga/effects';

import { studentSagaActions, getStudents } from "@redux/actions/studentActions";
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


export function* UpsertStudent() {
  yield takeEvery(studentSagaActions.UPSERT_STUDENT, function* (action) {
    const student = action.student.toObject();
    student.classes = student.classes.map(_class => _class.classId);
    student.students = student.students.map(student => student.studentId);
    console.log(student);
    const teacher = yield select(state => state.user);
    if(student.studentId) { // Edit
    } else { // Create
      if(yield call(teacher.createStudent, student)) {
        yield put(getStudents(teacher));
      }
    }
  });
}