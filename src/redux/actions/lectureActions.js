export const lectureSagaActions = {
  GET_LECTURES: "클래스 정보를 가져오는 액션"
}

export function getLectures() {
  return {
    type: lectureSagaActions.GET_LECTURES
  }
}