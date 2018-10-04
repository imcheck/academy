import { all, call } from 'redux-saga/effects';

import * as page from './pageSaga';
import * as user from './userSaga';


export default function* SagaRunner() {
  yield all([
    call(page.Init),
    call(user.Init),
    call(user.UpsertStudent)
  ])
}