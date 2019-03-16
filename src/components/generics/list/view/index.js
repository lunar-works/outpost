import React, { PureComponent } from 'react'

import Table from './table'
import List from './list'

const ListView = ({
    headers = [],
    data = [],
    tables = false,
    sortable = false,
    sortable_columns = [],
    filterable = false,
    filters = [],
    onSortComplete = () => {},
    onFilterComplete = () => {},
    sort = false,
    filter = false,
    pagination = 'none'
}) => {
    const props = {
        headers: headers,
        data: data,
        sortable: sortable,
        sortable_columns: sortable_columns,
        filterable: filterable,
        filters: filters,
        onSortComplete: onSortComplete,
        onFilterComplete: onFilterComplete,
        sort: sort,
        filter: filter,
        pagination: pagination
    }
    if (tables === true) {
        return <Table {...props} />
    }
    return <List {...props} />
}

export default ListView;