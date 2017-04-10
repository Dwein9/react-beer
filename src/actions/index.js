import beer from '../data/beer'

export function fetchBeers() {
  return {
      type: 'FETCH_BEERS',
      payload: beer
  }
}

export function faveBeers() {

    let faves = []
     beer.map((b) => {
       if (b.favorite) {
         faves.push(b)
       }
     })

  return {
    type: 'FETCH_FAVES',
    payload: faves
  }
}
