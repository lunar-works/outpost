import React, { Component } from 'react'
import styled from 'styled-components'

import Form from './form'

const ListWrap = styled.div`
    display: flex;
    position: relative;
`
const ListField = styled.div`
    flex: 1;
`
const FormWrap = styled.div`
    display: flex;
    width: 100%;
`
const TableWrap = styled.tr`

`
const TableField = styled.td`

`

class Item extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }

        this.handleEditSelect = this.handleEditSelect.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    } 

    handleEditSelect() {
        const editing = this.state.isEditing
        this.setState({
            isEditing: !editing
        })
        console.log(this.state.isEditing)
    }

    handleDelete() {
        console.log('Delete')
    }


    renderEdit() {
        return <a onClick={this.handleEditSelect}>EDIT</a>
    }

    renderDelete() {
        return <a onClick={this.handleDelete}>DELETE</a>
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

    renderField({value}, key) {
        const {tables} = this.props
        let Field = ListField
        if (tables === true) {
            Field = TableField
        }
        return (
            <Field>{ value }</Field>
        )
    }

    renderEditForm() {
        const {item, tables, headers} = this.props
        if (this.state.isEditing) {            
            let Wrap = FormWrap
            if (tables === true) {
                Wrap = TableWrap
            }
            return (
                <Wrap>
                    <Form data={item} headers={headers} />
                </Wrap>
            )
        }
    }

    render() {
        const {item, id, tables, headers} = this.props
        let Wrap = ListWrap
        if (tables === true) {
            Wrap = TableWrap
        }
        return (
            <>
                <Wrap>
                    { item.filter((field, key) => headers[key].display).map((field) => this.renderField(field, id)) }
                    { this.renderActions() }
                </Wrap>
                { this.renderEditForm() }
            </>
        )
    }
}

export default Item;