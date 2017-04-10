export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_BEERS':
      return action.payload
      case 'FETCH_FAVES':
        return action.payload
    default:
      return state
  }
}
