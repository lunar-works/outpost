import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Header extends PureComponent  {

    renderFilter() {
        return <Filters />
    }


    render() {
        return (
            <Wrap>
                Header
            </Wrap>
        )
    }
}

export default Header;