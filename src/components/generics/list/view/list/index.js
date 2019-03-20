import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../header'
import Item from '../../item'
import Filters from '../../filters'
import Pagination from '../../pagination'

const Wrap = styled.div`

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
        return <Item item={item.data} headers={this.props.headers} id={item.id} actions={this.props.actions} />
    }
    renderItems() {
        const {data, tables} = this.props
        let ListItems = Items
        if (tables === true) {
            ListItems = TableItems
        }
        return (
            <ListItems>
                { data.map((item) => this.renderItem(item)) }
            </ListItems>
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
            <TableWrap>
                { this.renderHeader() }
                { this.renderItems() }
            </TableWrap>
        )
    }

    render() {
        const {pagination} = this.props
        return (
            <Wrap>
                { this.renderFilter() }
                { this.renderContents() }
                <Pagination type={pagination} />
            </Wrap>
        )
    }
}

export default ListView;