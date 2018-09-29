import { all, call } from 'redux-saga/effects';

import { 
  Init
} from './pageSaga';

import {
  GetTableData
} from './requestSaga';

export default function* SagaRunner() {
  yield all([
    call(Init),
    call(GetTableData)
  ])
}