import React, { PureComponent } from 'react'
import styled, {css} from 'styled-components'
import Label from '../labels'

const SelectBase = css`
	display:flex;
	flex-direction: row;
`

const Select = styled.div`
    ${SelectBase}
`

class SelectComponent extends PureComponent {

	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		if(typeof this.props.onChange === 'function' && this.props.onChange !== undefined ){
			this.props.onChange(e)
		}
	}

	render() {
		const {name, type, label, required, checked, data} = this.props
		return (
			<Select>
                <Label 
					htmlFor={name}>{label}</Label>
                <select name={name}>
                    {options.map(({value, label}) => <option value={value}>{label}</option>)}
                </select>
			</Select>
		)
	}
}

export default SelectComponent;