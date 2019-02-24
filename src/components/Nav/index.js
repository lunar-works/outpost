import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Navigation = styled.nav`
  > a {
    display: block;
    padding: 0.4em 0.8em;
    color: #b2bacd;
    font-weight: bold;
    font-size: 1.6em;
    text-decoration: none;


    &:active, &:hover, &.active {
      color: #3e4556;
    }
  }
`

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const items = this.props.items
    const isActive = (path) => {
      const data  = document.location.pathname === path ? true : false
      console.log(data)
    }
    return (
      <Navigation>
        <NavLink
          to="/dashboard">
        Dashboard</NavLink>
        { items.map((item, i) => {
          return (
            <NavLink 
              to={ `/browse/${item.alias}`}>
            {item.title}</NavLink>
          )
        } )}
      </Navigation>
    )
  }
} 

export default Nav
