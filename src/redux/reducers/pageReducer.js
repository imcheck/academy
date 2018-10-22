import { Record } from 'immutable';
import { Students, Classes, Teachers } from '@models';


import { pageActions } from '@redux/actions/pageActions';


const classRecord = Record({
  pageLoading: true,
  classes: new Classes()
})
const studentRecord = Record({
  pageLoading: true,
  students: new Students()
})
const pageRecord = Record({
  pageLoading: true,
  student: studentRecord(),
  class: classRecord()
})

const initState = pageRecord();
export default (state = initState, action) => {
  switch (action.type) {
    case pageActions.UPDATE_PAGE:
      const newState = action.params.reduce((newState, update) => newState.setIn(update.path, update.data), state);
      return newState;
    default:
      return state;
  }
}
