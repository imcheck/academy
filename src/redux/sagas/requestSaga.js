import { takeEvery, put, call } from 'redux-saga/effects';

import { requestSagaActions } from '@redux/actions/requestActions';
import { updatePage } from '@redux/actions/pageActions';
import { getStudentData } from '@controllers/student';
import { getClassData } from '@controllers/class';
export function* GetData() {
  yield takeEvery(requestSagaActions.GET_DATA, function* (action) {
    try {
      const { type, by } = action.params;
      let params;

      params = [{
        path: [type, "isDataLoading"],
        data: true
      }];
      yield put(updatePage(params));

      switch(type) {
        case "student":
          const students = yield call(getStudentData, by);
          params = [{
            path: [type, "data"],
            data: students
          }];
          break;
        case "class":
          const classes = yield call(getClassData, by);
          params = [{
            path: [type, "data"],
            data: classes
          }];
          break;
        case "teacher":
          break;
        default:
          throw new Error("type is undefined");
      }
      params.push({
        path: [type, "isDataLoading"],
        data: false
      });
      yield put(updatePage(params));

    } catch(e) {
      console.log(e.message);
    }
  });
}