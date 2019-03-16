import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.tr`

`

const Field = styled.td`

`

class Row extends PureComponent  {

    renderField(value, key) {
        return (
            <Field >{ value }</Field>
        )
    }

    render() {
        const {item} = this.props
        return (
            <Wrap>
                { Object.keys(item).map((key) => this.renderField(item[key], key)) }
            </Wrap>
        )
    }
}

export default Row;