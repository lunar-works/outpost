import React, { Component, PureComponent } from 'react'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'
import NavItems from '../../configs'

import Nav from '../../components/Nav'
import { NavLink } from "react-router-dom"

class BrowseView extends PureComponent {

  constructor(props) {
    super(props)
    
  }

  state = {
    //model: this.props.match.params.model,
    model: NavItems.find(item => item.alias === this.props.match.params.model),
    loading: false,
    data: []
  }

  async componentDidMount() {
    //console.
    this.setState({
      loading: true
    }) 
    try {
      const request = await fetch('https://outpost.lunarworks.io/posts.json')
      const response = await request.json()
      this.setState({
        loading: false,
        data: response
      })
    } catch (error) {
      console.error(error)
    }
  }

  renderHeaders() {
    const data = this.state.data
    if(data.length > 0) {
      return (
        <div>
          { Object.keys(data[0]).map( (value) => <div>{ value }</div> ) }
        </div>
      )
    } else {
      return false
    }
  }

  renderContent() {
    const data = this.state.data
    if(this.state.loading) {
      return (
        <div>Loading.</div>
      )
    } else if (data.length > 0) {
      return (
        <div>
          { data.map( (item) => this.renderRow(item)) }
        </div>
      )
    } else {
      return (
        <div>There's no conent. sorry.</div>
      )
    }
  }

  renderRow(item) {
    return (
      <div>
        <NavLink to={ "/edit/" + this.state.model.alias + '/' + item.id}>
          { Object.values(item).map( (value) => <div>{ value }</div> ) }
        </NavLink>
      </div>
    )
  }

  render() {
    
    return(
      <div>
        <h2>List View</h2>
        <p></p>

        <div>
          { this.renderHeaders() }
          { this.renderContent() }
        </div>
      </div>
    )
  }

}
export default BrowseView
