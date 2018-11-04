import { Record } from 'immutable';
import { Students, Lectures, Teachers } from '@models';


import { pageActions } from '@redux/actions/pageActions';


const lectureRecord = Record({
  pageLoading: true,
  lectures: new Lectures()
})
const studentRecord = Record({
  pageLoading: true,
  students: new Students()
})
const pageRecord = Record({
  pageLoading: true,
  student: studentRecord(),
  lecture: lectureRecord()
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
