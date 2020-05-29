export default (state, action) => {
  switch(action.type) {
    case 'GET_RANDOM_JOKE':
    return {
      ...state
    }
    case 'GET_CATEGORIES':
      return {
        ...state
      }
    case 'SEARCH_JOKE':
      return {
        ...state
      }
    case 'GET_CATEGORY_JOKE':
      return {
        ...state
      }
    default:
      return state
  }
}