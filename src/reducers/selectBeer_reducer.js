export default function (state="", action) {
  switch (action.type) {
    case 'SELECT_BEER':
    console.log(action.payload);
    console.log("from reducer");
      return action.payload
    default:
      return state
  }
}
