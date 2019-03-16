import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    position: relative;
`

const Item = styled.div`
    flex: 1;
`

class Header extends PureComponent  {

    renderItem(item) {
        return(
            <Item
                column={ item.field }
            >
                { item.title }
            </Item>
        )
    }

    render() {
        const {data} = this.props
        return (
            <Wrap>
                { data.map((item) => this.renderItem(item)) }
            </Wrap>
        )
    }
}

export default Header;