export const studentSagaActions = {
  GET_STUDENTS: "학생들 정보를 가져오는 액션",
  UPSERT_STUDENT: "학생들 정보를 수정 및 생성 하는 액션"
}

export function getStudents(subject) {
  return {
    type: studentSagaActions.GET_STUDENTS,
    subject
  }
}

export function upsertStudent(student) {
  return {
    type: studentSagaActions.UPSERT_STUDENT,
    student
  }
}