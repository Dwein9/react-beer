function beersReducer(state=[], action) {
  switch (action.type) {
    case 'ALL_BEERS':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default beersReducer
