import React from 'react';

export default function Navbar(props) {

  myFaves(){
    this.props.beers.map((beer, i) {
      let faves = []
      if (beer.favorite) {
        { return <li key={i} > {beer.brewery} { beer.name } </li> } )
      }
    }
  }


  return (
      <div className="faves">
        {this.myFaves.bind(this)}
      </div>

  )
}
