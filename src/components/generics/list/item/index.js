import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Item extends PureComponent  {

    render() {
        return (
            <Wrap>
                Header
            </Wrap>
        )
    }
}

export default Item;