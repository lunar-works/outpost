import React, { PureComponent } from 'react'
import styled, {css} from 'styled-components'
import Label from '../labels'

const FieldBase = css`
	display:flex;
	flex-direction: column;
	margin-bottom: 10px;
	input{
		border:1px solid #ccc;
		border-radius: ${props => props.theme.main.borderRadius};
		font-size:1rem;
		padding: 0.5rem;
	}
`

const Field = styled.div`
    ${FieldBase}
`

class FieldComponent extends PureComponent {

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
		const {name, type, label, required, pattern = undefined, minlength = 3, maxlength = 999, placeholder} = this.props
		return (
			<Field>
				<Label 
					htmlFor={name}>{label}</Label>
				<input 
					type={type} 
					name={name}
					required={required}
					pattern={pattern}
					minLength={minlength}
					maxLength={maxlength}
					onChange={this.onChange}
					placeholder={placeholder || label}
				/>
			</Field>
		)
	}
}

export default FieldComponent;