import { takeEvery, put, call } from 'redux-saga/effects';

import { requestSagaActions } from '@redux/actions/requestActions';
import { updatePage } from '@redux/actions/pageActions';
import { getStudentData } from '@controllers/student';
import { getClassData } from '@controllers/class';
export function* GetTableData() {
  yield takeEvery(requestSagaActions.GET_TABLE_DATA, function* (action) {
    try {
      const { type } = action.params;
      let params;

      params = [{
        path: [type, "isTableLoading"],
        data: true
      }];
      yield put(updatePage(params));

      switch(type) {
        case "student":
          const students = yield call(getStudentData);
          params = [{
            path: [type, "data"],
            data: students
          }];
          break;
        case "class":
          const classes = yield call(getClassData);
          console.log(classes);
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
        path: [type, "isTableLoading"],
        data: false
      });
      yield put(updatePage(params));

    } catch(e) {
      console.log(e.message);
    }
  });
}