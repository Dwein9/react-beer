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

// export function fetchStyles() {
//
//   var styles = allBeers.reduce((obj, item) => {
//     if (!!obj[item.style]) {
//       obj[item.style]++
//     } else {
//       obj[item.style] = 1
//     }
//     return obj
//   }, {}
// )
//
//   return {
//     type: 'SELECT_BEER',
//     payload: Object.keys(styles)
//   }
// }
