export const teacherSagaActions = {
  GET_TEACHERS: "강사 정보를 가져오는 액션"
};

export function getTeachers() {
  return {
    type: teacherSagaActions.GET_TEACHERS
  }
}