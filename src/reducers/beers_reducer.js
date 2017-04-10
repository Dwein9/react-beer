import beer from '../data/beer'

export default function(state=beer, action) {
  switch (action.type) {
    case 'FETCH_BEERS':
      return action.payload
      case 'FETCH_FAVES':
        return action.payload
    default:
      return state
  }
}
