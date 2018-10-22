export const classSagaActions = {
  GET_CLASSES: "클래스 정보를 가져오는 액션"
}

export function getClasses(subject) {
  return {
    type: classSagaActions.GET_CLASSES,
    subject
  }
}
