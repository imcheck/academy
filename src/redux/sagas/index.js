import { all, call } from "redux-saga/effects";

import * as Page from "./pageSaga";
import * as User from "./userSaga";
import * as Student from "./studentSaga";
import * as Lecture from "./lectureSaga";


export default function* SagaRunner() {
  yield all([
    call(Page.Init),
    call(User.Init),
    call(Student.UpsertStudent),
    call(Student.GetStudents),
    call(Lecture.GetLectures)
  ])
}
