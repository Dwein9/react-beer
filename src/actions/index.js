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

export function fetchRandomBeer() {
  let num = Math.floor(Math.random()*beer.length)
  return {
    type: 'RANDOM_BEER',
    payload: allBeers[num]
  }
}

export function selectBeer(beerSelection) {
  return {
    type: 'SELECT_BEER',
    payload: beerSelection
  }
}

export function fetchStyles(styleSelection) {

  var beersByStyle = allBeers.filter((beer) => beer.style === styleSelection)

  return {
    type: 'STYLE_SELECT',
    payload: beersByStyle
  }
}
