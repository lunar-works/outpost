import React, { PureComponent } from 'react'
import { NavLink } from "react-router-dom"

class Nav extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const items = this.props.items
    return (
      <nav>
      { items.map(item => {
        return (
          <NavLink to={ "browse/" + item.alias}>{item.title}</NavLink>
        )
      } )}
      </nav>
    )
  }
} 

export default Nav
