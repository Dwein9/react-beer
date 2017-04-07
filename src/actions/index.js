const beers = [{id: 1, name: 'Stone IPA'}, {id: 2, name: 'Ballast Point Sculpin'}]

export default function allBeers(){
  debugger;
  return {
      type: 'ALL_BEERS',
      payload: beers
  }
}
