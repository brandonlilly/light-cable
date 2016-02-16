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

function reducer(state = {}, action) {
  return {
    messages: messagesReducer(state.messages, action),
  }
}

export default reducer
