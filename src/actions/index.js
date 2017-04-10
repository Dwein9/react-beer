import beer from '../data/beer'

const beers = beer

function allBeers(){
  return {
      type: 'ALL_BEERS',
      payload: beers
  }
}

function faveBeers(beer){
  return {
      type: 'FAVE_BEERS',
      payload: beer
  }
}
