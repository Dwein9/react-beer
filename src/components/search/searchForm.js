import React, { Component } from 'react'

export default class searchForm extends Component {

  componentWillMount(){
    this.setState({
      query: ""
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.search(this.state.query)
    this.setState({
      query: ""
  })
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <h3>Search a brewery to view popular beers</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleChange.bind(this)} value={this.state.query} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
