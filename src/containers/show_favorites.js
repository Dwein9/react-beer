import React, { Component } from 'react'
import beers from '../data/beer';

class ShowFavorites extends Component {

    render() {
      const faves = beers.filter(b => b.favorite).map( (beer, index) => {
        return (
          <li key={index}>
            {index+1}. {beer.brewery} { beer.name }
          </li>
        )
      })

      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" >
          <h2>Favorites</h2>
          <ul className="beers">
             { faves }
          </ul>
        </div>
      )
    }
  }

export default ShowFavorites
