import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Header from '../../header'
import Item from '../../item'
import Filters from '../../filters'

const Wrap = styled.div`

`

const ItemsWrap = styled.div`

`

const Items = styled.div`

`

class ListView extends PureComponent  {

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
            <ItemsWrap>
                <Items>
                    { data.map((item) => this.renderItem(item)) }
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