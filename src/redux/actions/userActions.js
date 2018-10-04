export const userActions = {
  SET_USER: "유저의 정보를 저장 하는 액션",
}

export const userSagaActions = {
  INSERT_OR_UPSERT_STUDENT: "유저의 학생을 추가 또는 수정 하는 액션"
}

export function updateUser(params) {
  return {
    type: userActions.SET_USER,
    params
  }
}
export function upsertStudent(params) {
  return {
    type: userSagaActions.INSERT_OR_UPSERT_STUDENT,
    params
  }
}