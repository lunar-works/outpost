import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Header from '../../thead'
import Item from '../../row'
import Filters from '../../filters'

const Wrap = styled.div`

`

const Table = styled.table`

`

const Items = styled.tbody`

`

class TableView extends PureComponent  {

    renderFilter() {
        return <Filters />
    }

    renderHeader() {
        const {headers, sortable, sortable_columns} = this.props
        return <Header
            data={headers}
            sortable={sortable}
            sortable_columns={sortable_columns}
        />
    }

    renderItem(item) {
        return <Item item={item} />
    }
    renderItems() {
        const {data, pagination} = this.props
        return (
            <Items>
                { data.map((item) => this.renderItem(item)) }
            </Items>
        )
    }

    render() {
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