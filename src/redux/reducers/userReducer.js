import { userActions } from '@redux/actions/userActions';
import { Teacher } from '@models';

const reducer = (state, action) => {
  switch(action.type) {
    case userActions.SET_USER:
      return action.params.teacher;
    default:
      if(state) return state;
      return new Teacher();
  }
}

export default reducer;