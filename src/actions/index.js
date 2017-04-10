import beer from '../data/beer'

const beers = beer

function allBeers(){
  return {
      type: 'ALL_BEERS',
      payload: beers
  }

function faveBeers(){
  return {
      type: 'FAVE_BEERS',
      payload: 'test'
  }
}
