import React, { Component } from 'react'
import List from './list'

const sortByValue = (data, column, direction) => {
    const compare = (a, b) => {
        const a_data = a.data.filter(({label}) => label == column)
        const b_data = b.data.filter(({label}) => label == column)
        if(a_data.length <= 0 && b_data.length <= 0) {
            return 0
        } else if(a_data.length <= 0) {
            return -1
        } else if(b_data.length <= 0) {
            return 1
        }
        return ((a_data[0].value < b_data[0].value) ? -1 : (a_data[0].value > b_data[0].value) ? 1 : 0 ) * direction
    }
    const _data = data.sort(compare)
    return _data
}

const filter = (data, column, parameter, type) => {

}

/**
 *      headers = [],
        baseData = [],
        tables = false,
        sortable = false,
        sortable_columns = [],
        filterable = false,
        filters = [],
        onSortComplete = () => {},
        onFilterComplete = () => {},
        sortFunction = sortByValue,
        filter = filter,
        pagination = 'none'
 */


class ListView extends Component {

    constructor(props) {
        super(props)
        const {baseData, sortFunction} = props;

        this.state = {
            data: baseData,
            sort_date: new Date().getTime(),
            sort_direction: 0,
            sort_column: 'none'
        }
        if (sortFunction) {
            this.sort = sortFunction.bind(this)
        } else {
            this.sort = this.sort.bind(this)
        }
    }

    sort(column) {
        const { data, sort_column, sort_direction } = this.state
        const new_column = column
        let new_direction = 1

        if (column === sort_column) {
            if (sort_direction >= 0) {
                new_direction = -1
            }
        }
        const newData = sortByValue(data, column, new_direction)
        this.setState({
            data: newData,
            sort_date: new Date().getTime(),
            sort_column: new_column,
            sort_direction: new_direction
        })
    }

    render() {
        return <List {...this.props}
            data={ this.state.data } 
            sort={ this.sort }
        />
    }
}

export default ListView;