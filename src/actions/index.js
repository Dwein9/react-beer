import beer from '../data/beer'

export function fetchBeers() {
  return {
      type: 'FETCH_BEERS',
      payload: beer
  }
}

export function fetchFavoriteBeers() {
  return {
    type: 'FAVORITE_BEERS',
    payload: beer[0]
  }
}

export function fetchRandomBeer() {
  let num = Math.floor(Math.random()*beer.length)

  return {
    type: 'RANDOM_BEER',
    payload: beer[num]
  }
}

export function beerSelect(key) {
  return {
    type: 'SELECT_BEER',
    payload: key
  }
}
