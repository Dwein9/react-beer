import beer from '../data/beer'

export function fetchBeers() {
  console.log(beer);
  return {
      type: 'FETCH_BEERS',
      payload: beer
  }
}

export function faveBeers() {
  return {
    type: 'FETCH_FAVES',
    payload: beer[0]
  }
}
