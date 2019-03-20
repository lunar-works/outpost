import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    position: relative;
`

const Item = styled.div`
    flex: 1;
`
const TableWrap = styled.thead`

`

const TableItem = styled.th`

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
        let ItemItem = Item
        if (this.props.tables) {
            ItemItem = TableItem
        }
        return(
            <ItemItem
                column={ item.field }
                onClick={ () => this.sort(item) }
            >
                { item.title }
            </ItemItem>
        )
    }

    render() {
        const {data, tables} = this.props
        const children = data.filter(({display}) => display).map((item) => this.renderItem(item))
        
        if (tables) {
            return (
                <TableWrap>
                    <tr>
                        { children }
                    </tr>
                </TableWrap>
            )
        }
        return (
            <Wrap>{ children }</Wrap>
        )
    }
}

export default Header;