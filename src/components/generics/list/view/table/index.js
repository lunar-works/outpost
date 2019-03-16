import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../thead'
import Item from '../../row'
import Filters from '../../filters'
import Pagination from '../../pagination'


const Wrap = styled.div`

`

const Table = styled.table`

`

const Items = styled.tbody`

`

class TableView extends Component  {

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
        return <Item item={item.data} id={item.id} />
    }
    renderItems() {
        const {data} = this.props
        return (
            <Items>
                { data.map((item) => this.renderItem(item)) }
            </Items>
        )
    }

    render() {
        const {pagination} = this.props
        return (
            <Wrap>
                { this.renderFilter() }
                <Table>
                    { this.renderHeader() }
                    { this.renderItems()}
                </Table>
                <Pagination type={pagination} />
            </Wrap>
        )
    }
}

export default TableView;