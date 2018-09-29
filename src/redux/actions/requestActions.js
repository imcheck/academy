export const requestSagaActions = {
  GET_TABLE_DATA: "테이블 데이터를 가져오는 액션"
};


export function getTableData(params) {
  return {
    type: requestSagaActions.GET_TABLE_DATA,
    params
  }
}