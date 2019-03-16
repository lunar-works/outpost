import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.thead`

`

const Item = styled.th`

`

class Thead extends Component  {
    
    constructor(props) {
        super(props)

        this.sort = this.sort.bind(this)
    }

    sort(item) {
        if(this.props.sortable === true) {        
            this.props.sort(item.field)
        } 
    }

    renderItem(item) {
        return(
            <Item
                column={ item.field }
                onClick={ () => this.sort(item) }
            >
                { item.title }
            </Item>
        )
    }

    render() {
        const {data} = this.props
        return (
            <Wrap>
                <tr>
                    { data.map((item) => this.renderItem(item)) }
                </tr>
            </Wrap>
        )
    }
}

export default Thead;