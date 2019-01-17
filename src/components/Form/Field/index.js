import React, { PureComponent } from 'react'

class Field extends PureComponent {

	validate() {

	}

	render() {
		const {type, name, label, required = false, minlength = 3, maxlength = 9999, pattern = undefined} = this.props
		return( 
			<fieldset>
				<input 
					type={type} 
					name={name}
					required={required}
					pattern={pattern}
					minLength={minlength}
					maxLength={maxlength}  />
				<label htmlFor={name}>{label}</label>
			</fieldset>
		)
	}
}

export default Field;
