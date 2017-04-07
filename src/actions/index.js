import beer from '../data/beer'

const beers = beer

export default function allBeers(){
  debugger;
  return {
      type: 'ALL_BEERS',
      payload: beers
  }
}
