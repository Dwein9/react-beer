import beer from '../data/beer'

export function allBeers(){
  return {
      type: 'ALL_BEERS',
      payload: beer
  }
}
