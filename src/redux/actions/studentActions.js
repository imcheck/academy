export const studentSagaActions = {
  GET_STUDENTS: "학생들 정보를 가져오는 액션"
}

export function getStudents(subject) {
  return {
    type: studentSagaActions.GET_STUDENTS,
    subject
  }
}
