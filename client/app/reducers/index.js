function messagesReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        [action.message.id]: action.message,
      }
    default:
      return state
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
  return state
}

function reducer(state = {}, action) {
  return {
    messages: messagesReducer(state.messages, action),
    user:     userReducer(state.user, action),
  }
}

export default reducer
