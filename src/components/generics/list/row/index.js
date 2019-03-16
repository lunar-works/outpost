import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.tr`

`

const Field = styled.td`

`

class Row extends PureComponent  {

    renderField({label, value, type, editable}, key) {
        return (
            <Field>{ value }</Field>
        )
    }

    render() {
        const {item, id} = this.props
        return (
            <Wrap>
                { item.map((field) => this.renderField(field, id)) }
            </Wrap>
        )
    }
}

export default Row;