import React, { PureComponent } from 'react'
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

const oddEvent = (match) => {
  if (match === document.location.pathname) {
    return true
  }
  return false
}

class Nav extends PureComponent {
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
        { items.map(item => {
          return (
            <NavLink 
              isActive={() => oddEvent(`/browse/${item.alias}`)}
              to={ `/browse/${item.alias}`}>
            {item.title}</NavLink>
          )
        } )}
      </Navigation>
    )
  }
} 

export default Nav
