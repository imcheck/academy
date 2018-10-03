import { all, call } from 'redux-saga/effects';

import { 
  Init
} from './pageSaga';


export default function* SagaRunner() {
  yield all([
    call(Init)
  ])
}