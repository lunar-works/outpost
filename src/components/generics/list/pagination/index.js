import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`

`

class Pagination extends PureComponent  {

    returnPagination() {
        return (
            <Wrap type>
                Pagination
            </Wrap>
        )
    }

    render() {
        const {type} = this.props
        switch(type) {

            case '':
            case '':
                return this.renderPagination(type)

            case 'none':
            default:
                return null
        }
    }
}

export default Pagination;