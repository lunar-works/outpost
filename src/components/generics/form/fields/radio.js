import React, { PureComponent } from 'react'
import styled, {css} from 'styled-components'
import Label from '../labels'

const RadioBase = css`
	display:flex;
	flex-direction: row;
`

const Radio = styled.div`
    ${RadioBase}
`

class RadioComponent extends PureComponent {

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
		const {name, type, label, required} = this.props
		return (
			<Radio>
				<input 
					type="radio" 
					name={name}
					required={required}
					onChange={this.onChange}
				/>
                <Label 
					htmlFor={name}>{label}</Label>
			</Radio>
		)
	}
}

export default RadioComponent;