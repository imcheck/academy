import { userActions } from '@redux/actions/userActions';
import { Teacher } from '@models';

const reducer = (state=new Teacher(), action) => {
  switch(action.type) {
    case userActions.SET_USER:
      return action.params.teacher;
    default:
      if(state) return state;
  }
}

export default reducer;
