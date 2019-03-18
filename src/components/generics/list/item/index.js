import React, { Component } from 'react'
import styled from 'styled-components'

const ListWrap = styled.div`
    display: flex;
    position: relative;
`
const ListField = styled.div`
    flex: 1;
`
const TableWrap = styled.tr`

`
const TableField = styled.td`

`

class Item extends Component  {


    renderEdit() {
        return <a>EDIT</a>
    }

    renderDelete() {
        return <a>DELETE</a>
    }

    renderActions() {
        const {actions = [], id} = this.props
        if (actions.length > 0) {
            return(
                <div>
                    { actions.map((action) => {

                        if (action === 'edit') {
                            return this.renderEdit(id)
                        } else if (action === 'delete') {
                            return this.renderDelete(id)
                        }
                    }) }
                </div>
            )
        }
    }

    renderField({label, value, type, editable}, key) {
        const {tables} = this.props
        let Field = ListField
        if (tables === true) {
            Field = TableField
        }
        return (
            <Field>{ value }</Field>
        )
    }

    render() {
        const {item, id, tables} = this.props
        let Wrap = ListWrap
        if (tables === true) {
            Wrap = TableWrap
        }
        return (
            <Wrap>
                { item.map((field) => this.renderField(field, id)) }
                
                { this.renderActions() }
            </Wrap>
        )
    }
}

export default Item;