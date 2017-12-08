import React, { Component } from 'react'
import axios from 'axios'
import api from './api'
import APIsearchResults from './apiSearchResults'
import APIsearchForm from './apiSearchForm'

export default class APIsearchPage extends Component {
  constructor(props) {
  super(props)
    this.state = { results: false }
  }

  search(user){
    axios.get(`https://api.untappd.com/v4/user/info/${user.split(" ").join("+")}?client_id=${api.client_id}&client_secret=${api.client_secret}`)
      .then(response => {
        debugger
        var info = {
          name: `${response.data.response.user.first_name} ${response.data.response.user.last_name}`,
          stats: response.data.response.user.stats,
          items: response.data.response.user.checkins.items
        }
        this.setState({results: info})
      })
  }

  render() {
    return (
      <div className="container">
        <APIsearchForm search={this.search.bind(this)}/>
        <APIsearchResults results={this.state.results}/>
      </div>
    )
  }
}
