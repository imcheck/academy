import { Record } from 'immutable';


import { pageActions } from '@redux/actions/pageActions';

const searchRecord = Record({
  text: ""
})

const pageRecord = Record({
  search: searchRecord()
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