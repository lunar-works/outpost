import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../header'
import Item from '../../item'
import Filters from '../../filters'
import Pagination from '../../pagination'

const Wrap = styled.div`

`
const ItemWrap = styled.div`

`
const Items = styled.div`

`
const TableWrap = styled.table`

`
const TableItems = styled.tbody`

`

class ListView extends Component  {

    renderFilter() {
        const {filterable, filters, filter} = this.props
        if (filterable === true) {      
            return <Filters
                filterable={filterable}
                filters={filters}
                filter={filter}
            />
        }
        return null
    }

    renderHeader() {
        const {headers, sort, sortable, sortable_columns} = this.props
        return <Header
            data={headers}
            sort={sort}
            sortable={sortable}
            sortable_columns={sortable_columns}
        />
    }

    renderItem(item) {
        return <Item item={item.data} id={item.id} actions={this.props.actions} />
    }
    renderItems() {
        const {data, pagination, tables} = this.props
        let ItemsWrap = ItemWrap
        let ListItems = Items
        if (tables === true) {
            ItemsWrap = TableWrap
            ListItems = TableItems
        }
        return (
            <ItemsWrap>
                <ListItems>
                    { data.map((item) => this.renderItem(item)) }
                </ListItems>
                <Pagination type={pagination} />
            </ItemsWrap>
        )
    }

    renderContents() {
        if(!this.props.tables) {
            return(
                <>
                { this.renderHeader() }
                { this.renderItems() }
                </>
            )
        }
        return (
            <Table>
                { this.renderHeader() }
                { this.renderItems() }
            </Table>
        )
    }

    render() {
        return (
            <Wrap>
                { this.renderFilter() }
                <Pagination type={pagination} />
            </Wrap>
        )
    }
}

export default ListView;