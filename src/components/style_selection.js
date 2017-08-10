import React, { Component } from 'react'
import Proptypes from 'prop-types';

class StyleSelection extends Component {
  constructor(props) {
     super(props)
     this.state = {
       selectedStyle: this.props.styles[0],
       beers: this.props.beers
     }
     this.showStyles = this.showStyles.bind(this)
   }

   showStyles() {
     return this.props.styles.map((style, index) => {
       return (
         <option key={index} value={style}>{style}</option>
       )
     })
   }

   updateBeers(style){
     let beers = this.props.beers

     if (style === "Select All") {
       return beers
     } else {
       return beers.filter(beer => beer.style === style)
     }
   }

   updateStyle(e) {
     this.setState({
       selectedStyle: e.target.value,
       beers: this.updateBeers(e.target.value)
     })
   }

  render() {
    const beers = this.state.beers.map( (beer, index) => {
      return (
        <li key={index}>
          {index+1}. {beer.brewery} { beer.name }
        </li>
      )
    })

    return(
      <div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1>View beers by style</h1>
          <select value={this.state.selectedStyle} onChange={this.updateStyle.bind(this)}>
            {this.showStyles()}
          </select>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">

          {this.state.selectedStyle === "Select All" ?
            "" :
            <h1>{this.state.selectedStyle}</h1>}

            <ul className="beers">
              { beers }
            </ul>

        </div>

      </div>
    )
  }
}

export default StyleSelection

StyleSelection.propTypes = {
  styles: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
  beers: Proptypes.arrayOf(Proptypes.object.isRequired).isRequired
}
