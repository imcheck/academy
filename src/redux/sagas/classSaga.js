import { takeEvery, call, put } from 'redux-saga/effects';

import { classSagaActions } from "@redux/actions/classActions";
import { updatePage } from "@redux/actions/pageActions";
import * as Model from "@models";

export function* GetClasses() {
  yield takeEvery(classSagaActions.GET_CLASSES, function* (action) {
    if(action.subject instanceof Model.Teacher) {
      let params;
      params = [{
        path: ["class", "pageLoading"],
        data: true
      }]
      yield put(updatePage(params));

      const teacher = action.subject;
      const classes = yield call(teacher.getClasses);
      params = [{
        path: ["class", "classes"],
        data: classes
      }, {
        path: ["class", "pageLoading"],
        data: false
      }];
      yield put(updatePage(params));

    } else if(action.subject instanceof Model.Class) {
    } else if(action.subject instanceof Model.Student) {
    }
  });
}
