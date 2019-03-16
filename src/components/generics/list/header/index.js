import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    position: relative;
`

const Item = styled.div`
    flex: 1;
`

class Header extends Component  {

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
                { data.map((item) => this.renderItem(item)) }
            </Wrap>
        )
    }
}

export default Header;