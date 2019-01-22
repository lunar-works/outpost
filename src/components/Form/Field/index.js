import React, { PureComponent } from 'react'

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
		}else {
			this.setState({valid: false})
		}
	}

	renderRegularInputs({type, name, label, required = false, minlength = 3, maxlength = 9999, pattern = undefined, placeholder = undefined, value=undefined}){
		return (
			<fieldset>
				<label 
					data-valid={this.state.valid} 
					htmlFor={name}>{label}</label>
				<input 
					type={type} 
					name={name}
					required={required}
					pattern={pattern}
					placeholder={placeholder}
					defaultValue={value}
					minLength={minlength}
					maxLength={maxlength}
					onChange={this.onChange}
				/>
			</fieldset>
		)
	}

	renderCheckInputs ({type, name, label}) {
		return (
			<fieldset>
				<input 
					type={type} 
					name={name}
				/>
				<label htmlFor={name}>{label}</label>
			</fieldset>
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
