import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Pagination extends PureComponent  {

    renderMore() {
        return (
            <Wrap>
                More...
            </Wrap>
        )
    }

    renderPages() {
        return (
            <Wrap>
                Pages
            </Wrap>
        )
    }

    render() {
        const {type} = this.props
        switch(type) {

            case '':
               return this.renderPages(type)
            case '':
                return this.renderMore(type)

            case 'none':
            default:
                return null
        }
    }
}

export default Pagination;