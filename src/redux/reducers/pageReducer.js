import { Record } from 'immutable';
import { Students, Classes, Teachers } from '@models';


import { pageActions } from '@redux/actions/pageActions';

const searchRecord = Record({
  text: "",
  optionValue: "",
})

const studentDataRecord = Record({
  search: searchRecord(),
  data: new Students(),
  isDataLoading: false
})
const classDataRecord = Record({
  search: searchRecord(),
  data: new Classes(),
  isDataLoading: false
})
const teacherDataRecord = Record({
  search: searchRecord(),
  data: new Teachers(),
  isDataLoading: false
})

const pageRecord = Record({
  student: studentDataRecord(),
  class: classDataRecord(),
  teacher: teacherDataRecord()
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