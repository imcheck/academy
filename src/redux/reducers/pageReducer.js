import { Map } from 'immutable';


import { pageActions } from '@redux/actions/pageActions';

const initState = Map();
export default (state = initState, action) => {
  switch (action.type) {
    case pageActions.UPDATE_PAGE:
      return state.setIn(action.params.path, action.params.data);
    default:
      return state;
  }
}