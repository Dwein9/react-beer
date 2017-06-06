import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStyles, fetchBeers } from '../actions/index'
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

   updateStyle(e) {
     console.log(e.target.value);
     this.setState({
       selectedStyle: e.target.value,
     })
   }

  //  showBeers(style){
  //    this.props.fetchStyles(style)
  //    let beers = this.props.beers
  //    this.setState({
  //      beers: beers
  //    })
  //  }


    changeItUp(){
      if (this.state.selectedStyle === "Select All") {
        this.props.fetchBeers()
        let allBeers = this.props.beers
        this.setState( { beers: allBeers } )
      } else {
        this.props.fetchStyles(this.state.selectedStyle)
        let beersByStyls = this.props.beers
        this.setState( { beers: beersByStyls } )
      }
    }


  render() {
    console.log(this.state.beers);
    return(
      <div>
        <h1>View beers by style</h1>
        <select value={this.state.selectedStyle} onChange={this.updateStyle.bind(this)}>
          {this.showStyles()}
        </select>
        <div> {this.state.selectedStyle === "Select All" ?
          "" :
          <h1>{this.state.selectedStyle}</h1>}
         </div>
        <ul>
          <button onClick={this.changeItUp.bind(this)}>Change</button>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers,
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

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelection)

StyleSelection.propTypes = {
  styles: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
  beers: Proptypes.arrayOf(Proptypes.object.isRequired).isRequired
}
