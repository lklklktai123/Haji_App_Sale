export function userReducer(state = [], action) {
    if (action.type === 'TYPE_FETCH_INSERT_USER') {
      return state = action.user;
    }
    return state 
  }
  