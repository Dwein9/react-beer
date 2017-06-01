export default function (state="", action) {
  switch (action.type) {
    case 'SELECT_BEER':
      return action.payload
    case 'STYLE_SELECT':
      return action.payload
    default:
      return state
  }
}
