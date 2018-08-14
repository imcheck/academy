export const pageSagaActions = {
  INIT: "Init Action"
}

export const pageActions = {
  UPDATE_PAGE: "페이지 리듀서 직접 변화 액션"
}
export function init() {
  return {
    type: pageSagaActions.INIT
  }
}
export function updatePage(params) {
  return {
    type: pageActions.UPDATE_PAGE,
    params
  }
}
