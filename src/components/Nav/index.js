import React, { PureComponent } from 'react'

class Nav extends PureComponent {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <nav>
        { this.props.children }
      </nav>
    )
  }
} 

export default Nav;
