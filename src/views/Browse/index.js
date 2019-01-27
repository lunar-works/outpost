import React, { Component, PureComponent } from 'react'
import NavItems from '../../configs'
import { NavLink } from 'react-router-dom'

import moment from 'moment'
import styled from 'styled-components'


const Browse = styled.nav`
  table {
    tr {

    }
  }
`

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

  renderHead() {
    const data = this.state.data
    if(data.length > 0) {
      return (
        <tr>
          { Object.keys(data[0]).map( (value) => <th>{ value }</th> ) }
        </tr>
      )
    } else {
      return false
    }
  }

  renderBody() {
    const data = this.state.data
    if(this.state.loading) {
      return (
        <tr><td>Loading.</td></tr>
      )
    } else if (data.length > 0) {
      return data.map( (item) => this.renderRow(item))
    } else {
      return (
        <div>There's no content. sorry.</div>
      )
    }
  }

  renderRow(item) {
    return (
      <tr>
        { Object.values(item).map( (value) => <td><NavLink to={ "/edit/" + this.state.model.alias + '/' + item.id}>{ value }</NavLink></td> ) }
      </tr>
    )
  }

  renderFoot() {
    return null
  }

  render() {
    
    return(
      <Browse>
        <h2>List View</h2>
        <p></p>

        <table>
          <thead>
            { this.renderHead() }
          </thead>
          <tbody>
            { this.renderBody() }
          </tbody>
          <tfoot>
            { this.renderFoot() }
          </tfoot>
        </table>
      </Browse>
    )
  }

}
export default BrowseView
