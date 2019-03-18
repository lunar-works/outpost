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


    renderEdit() {
        return <a>EDIT</a>
    }

    renderDelete() {
        return <a>DELETE</a>
    }

    renderActions() {
        const {actions = [], id} = this.props
        console.log(actions)
        if(actions.length > 0) {
            return(
                <div >
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
        return (
            <Field>{ value }</Field>
        )
    }

    render() {
        const {item, id} = this.props
        return (
            <Wrap>
                { item.map((field) => this.renderField(field, id)) }
                
                { this.renderActions() }
            </Wrap>
        )
    }
}

export default Item;