import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.thead`

`

class Thead extends PureComponent  {

    render() {
        return (
            <Wrap>
                Header
            </Wrap>
        )
    }
}

export default Thead;