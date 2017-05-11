import beer from '../data/beer'

const allBeers = beer

export function fetchBeers() {
  return {
      type: 'FETCH_BEERS',
      payload: allBeers
  }
}

// export function fetchFavoriteBeers() {
//   return {
//     type: 'FAVORITE_BEERS',
//     payload: beer[0]
//   }
// }
//
export function fetchRandomBeer() {
  let num = Math.floor(Math.random()*beer.length)

  return {
    type: 'RANDOM_BEER',
    payload: beer[num]
  }
}

export function selectBeer(beerSelection) {
  return {
    type: 'SELECT_BEER',
    payload: beerSelection
  }
}
