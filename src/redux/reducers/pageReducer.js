import { Record } from 'immutable';
import { CommonData } from '@models';


import { pageActions } from '@redux/actions/pageActions';

const searchRecord = Record({
  text: "",
  optionValue: "",
})

const dataRecord = Record({
  search: searchRecord(),
  data: new CommonData(),
  isTableLoading: false
})

const pageRecord = Record({
  search: searchRecord(),
  student: dataRecord(),
  class: dataRecord()
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