export default function selectBeerReducer(state="", action) {
  switch(action.type) {
    case "SELECT_BEER":
      return action.payload
    default:
      return state
  }
}
