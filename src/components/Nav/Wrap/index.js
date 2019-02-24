import React, { PureComponent } from 'react'
import Nav from '../'
import Logo from '../../Logo/Header'

import styled from 'styled-components'

const Wrap = styled.div`
    background: #edf2fa;
    color: #b2bacd;
    padding: 0 2em;
`

class NavPane extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {name, tagline, src, items} = this.props
    return (
      <Wrap>
        <Logo name={name} tagline={tagline} src={src} />
        <Nav items={items} />
      </Wrap>
    )
  }
} 

export default NavPane
