import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../header'
import Item from '../../item'
import Filters from '../../filters'
import Pagination from '../../pagination'

const Wrap = styled.div`

`

const ItemsWrap = styled.div`

`

const Items = styled.div`

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

    renderActions() {
        const {actions = []} = this.props
        if(actions.length > 0) {
            
        }
    }

    renderItem(item) {
        return <Item item={item.data} id={item.id} />
    }
    renderItems() {
        const {data, pagination} = this.props
        return (
            <ItemsWrap>
                <Items>
                    { data.map((item) => this.renderItem(item)) }
                    { this.renderActions() }
                </Items>
                <Pagination type={pagination} />
            </ItemsWrap>
        )
    }

    render() {
        return (
            <Wrap>
                { this.renderFilter() }
                { this.renderHeader() }
                { this.renderItems()}
            </Wrap>
        )
    }
}

export default ListView;