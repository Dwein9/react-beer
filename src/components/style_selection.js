import React, { Component } from 'react'


export default class StyleSelection extends Component {
  constructor(props) {
     super(props)
     this.state = {
       selectedStyle: 'Select All',
     }
   }

   updateStyle(e) {
     this.setState({
       selectedStyle: e.target.value
     })
    }

  render() {
    const styles = ["Select All", "IPA", "Ale", "Stout", "Lager", "Bock", "SaIson", "PIlsner", "Porter", "RauchbIer", "WItbIer", "Kolsch", "ESB", "FruIt Beer", "Gose"].map((style, index) => {
      return (
        <option key={index} value={style}>{style}</option>
      )
    })
    return(
      <div>
        <select value={this.state.selectedStyle} onChange={this.updateStyle.bind(this)}>
          {styles}
        </select>
      </div>
    )
  }
}
