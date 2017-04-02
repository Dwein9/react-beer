export default function beersReducer(state={}, action) {
  switch (action.type) {
    case 'GET_BEERS':
      return action.payload
    default:
      return state
  }
}
