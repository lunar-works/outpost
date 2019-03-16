import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    position: relative;
`

const Field = styled.div`
    flex: 1;
`

class Item extends Component  {

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

export default Item;