import React, { PureComponent } from 'react'

import styled from 'styled-components'

const Fieldset = styled.fieldset`
	padding: 3em 1em 2em;
	border: 1px solid #ebedf1;
	margin: 1em auto;
	border-radius: 3px;
	display: block;
	position: relative;
	
	input {
		font-size: 1.2em;
		padding: 0.6em 0 0.6em 0.6em;
		display: block;
		border: none;
		border-bottom: 1px solid #4e535f;
		background: transparent;
	}
	input:focus { 
		outline:none;
	}

	label {
		color: #999;
		font-size: 18px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 1.4em;
		bottom: 2.3em;
		transition: 0.2s ease all; 
		-moz-transition: 0.2s ease all; 
		-webkit-transition: 0.2s ease all;
	}
	
	input:focus ~ label, input:valid ~ label {
		bottom: 6.2em;
		font-size: 0.9em;
		color: #5264ae;
	}
`


class Field extends PureComponent {

	constructor(props){
		super(props)

		this.onChange = this.onChange.bind(this)
		this.renderCheckInputs = this.renderCheckInputs.bind(this)
		this.renderRegularInputs = this.renderRegularInputs.bind(this)
	}

	state = {
		valid: 'clean'
	}
	
	onChange(e){
		if(e.target.validity.valid){
			this.setState({valid: true})
		} else {
			this.setState({valid: false})
		}
	}

	renderRegularInputs({type, name, label, required = false, minlength = 3, maxlength = 9999, pattern = undefined}){
		return (
			<>
				<label 
					data-valid={this.state.valid} 
					htmlFor={name}>{label}</label>
				<input 
					type={type} 
					name={name}
					required={required}
					pattern={pattern}
					minLength={minlength}
					maxLength={maxlength}
					onChange={this.onChange}
				/>
				
			</>
		)
	}

	renderCheckInputs ({type, name, label}) {
		return (
			<>
				<input 
					type={type} 
					name={name}
				/>
				<label htmlFor={name}>{label}</label>
			</>
		)
	}

	render() {
		const {type} = this.props
		if(type !== 'checkbox' || type !== 'radio'){
			return this.renderRegularInputs(this.props)
		} else {
			return this.renderCheckInputs(this.props)
		}
	}
}

export default Field;
