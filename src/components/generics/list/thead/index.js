import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.thead`

`

const Item = styled.th`

`

class Thead extends PureComponent  {

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
                <tr>
                    { data.map((item) => this.renderItem(item)) }
                </tr>
            </Wrap>
        )
    }
}

export default Thead;