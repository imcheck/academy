export const userActions = {
  SET_USER: "유저의 정보를 저장 하는 액션",
}

export const userSagaActions = {
  INSERT_OR_UPSERT_STUDENT: "유저의 학생을 추가 또는 수정 하는 액션",
  INIT: "인증 후 데이터 가져오기"
}

export function updateUser(params) {
  return {
    type: userActions.SET_USER,
    params
  }
}
export function init() {
  return {
    type: userSagaActions.INIT
  }
}