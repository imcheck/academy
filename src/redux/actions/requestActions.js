export const requestSagaActions = {
  GET_DATA: "데이터를 가져오는 액션"
};


export function getData(params) {
  return {
    type: requestSagaActions.GET_DATA,
    params
  }
}