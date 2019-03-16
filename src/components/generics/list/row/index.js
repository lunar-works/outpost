import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.tr`

`

class Row extends PureComponent  {

    render() {
        return (
            <Wrap>
                Header
            </Wrap>
        )
    }
}

export default Row;