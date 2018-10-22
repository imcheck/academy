import { all, call } from "redux-saga/effects";

import * as Page from "./pageSaga";
import * as User from "./userSaga";
import * as Student from "./studentSaga";
import * as Class from "./classSaga";


export default function* SagaRunner() {
  yield all([
    call(Page.Init),
    call(User.Init),
    call(User.UpsertStudent),
    call(Student.GetStudents),
    call(Class.GetClasses)
  ])
}
