import { Record } from 'immutable';


import { pageActions } from '@redux/actions/pageActions';

const searchRecord = Record({
  text: "",
  optionValue: "",
})

const tableRecord = Record({
  search: searchRecord(),
  tableData: []
})

const pageRecord = Record({
  search: searchRecord(),
  student: tableRecord()
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