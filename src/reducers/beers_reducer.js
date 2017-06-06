export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_BEERS':
      return action.payload
    case 'FAVORITE_BEERS':
      return action.payload
    case 'RANDOM_BEER':
      return action.payload
    case 'STYLE_SELECT':
      return action.payload
    default:
      return state
  }
}
