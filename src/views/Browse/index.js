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
    console.log(this.props.match.params.model)
    console.log(NavItems.find(item => item.alias === this.state.model))
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

  render() {

    
    return(
      <div>
        <h2>List View</h2>
        <p></p>




      </div>
    )
  }


}
export default BrowseView
