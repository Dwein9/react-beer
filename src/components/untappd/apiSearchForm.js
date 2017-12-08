import React, { Component } from 'react'

export default class apiSearchForm extends Component {

  componentWillMount(){
    this.setState({
      user: ""
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.search(this.state.user)
    this.setState({
      user: ""
  })
  }

  handleChange(e){
    this.setState({
      user: e.target.value
    })
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <h3>Input your username to see your Untappd data</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleChange.bind(this)} value={this.state.user} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
