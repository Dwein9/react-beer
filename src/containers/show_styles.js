import React, { Component } from 'react'
import StyleSelection from '../components/style_selection';
import beer from '../data/beer';

const styles = ["Select All", "IPA", "Ale", "Stout", "Lager", "Bock", "Saison", "Pilsner", "Porter", "Rauchbier", "Witbier", "Kolsch", "ESB", "Fruit Beer", "Gose"]

class ShowStyles extends Component {

  render() {
    return (
      <div>
        <StyleSelection beers={beer} styles={styles}/>
      </div>
    )
  }
}

export default ShowStyles
