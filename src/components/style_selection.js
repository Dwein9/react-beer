import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStyles, fetchBeers } from '../actions/index'

class StyleSelection extends Component {
  constructor(props) {
     super(props)
     this.state = {
       selectedStyle: 'Select All',
       beers: this.props.beers
     }
   }

   showBeers(style){
     this.props.fetchStyles(style)
     console.log("afterfetchstyles");
     let beers = this.props.beers
     console.log("about to set state");
     console.log(beers);
     console.log(this.state.beers);
     this.setState({
       beers: beers
     })
   }

   updateStyle(e) {
     this.setState({
       selectedStyle: e.target.value
     })
     this.showBeers(e.target.value)
    }

    beerDisplay(){
      if (this.state.selectedStyle === "Select All") {
        return (
          <li>
            Hi.
          </li>
        )
      } else {
        this.state.beers.map( (beer, index) => {
          return (
            <li key={index}>
              {index+1}. {beer.brewery} { beer.name }
            </li>
          )
        })
      }
    }


  render() {
    const styles = ["Select All", "IPA", "Ale", "Stout", "Lager", "Bock", "Saison", "Pilsner", "Porter", "Rauchbier", "Witbier", "Kolsch", "ESB", "Fruit Beer", "Gose"].map((style, index) => {
      return (
        <option key={index} value={style}>{style}</option>
      )
    })

    const beersByStyle = this.beerDisplay()
    console.log("within render")
    console.log(this.state.beers)

    return(
      <div>
        <h1>View beers by style</h1>
        <select value={this.state.selectedStyle} onChange={this.updateStyle.bind(this)}>
          {styles}
        </select>
        <div>{ this.state.selectedStyle === "Select All" ?
          "" :
          // <div> {this.state.selectedStyle} </div>
        <ul>
          {beersByStyle}
        </ul>}
      </div>
    </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchStyles: function(style) {
      var action = fetchStyles(style)
      dispatch(action)
    },
    fetchBeers: function() {
      var action = fetchBeers()
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(StyleSelection)
