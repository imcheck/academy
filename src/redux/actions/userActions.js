export const userActions = {
  SET_USER: "유저의 정보를 저장 하는 액션"
}

export function updateUser(params) {
  return {
    type: userActions.SET_USER,
    params
  }
}