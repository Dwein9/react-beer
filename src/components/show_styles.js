import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/index'
import StyleSelection from '../components/style_selection';

class ShowStyles extends Component {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    const styles = ["Select All", "IPA", "Ale", "Stout", "Lager", "Bock", "Saison", "Pilsner", "Porter", "Rauchbier", "Witbier", "Kolsch", "ESB", "Fruit Beer", "Gose"]
    return (
      <div>
        <StyleSelection beers={this.props.beers} styles={styles}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBeers: function() {
      var action = fetchBeers()
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(ShowStyles)
