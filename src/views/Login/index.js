import React, { Component, PureComponent } from 'react'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'

const fields = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true
  },{
    name: 'name',
    label: 'Full Name',
    required: true
  },{
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true
  }
]


class Login extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  validate() {

  } 

  async login(data) {
    try {
      const request = await fetch('https://skylab.lunarworks.io/data.json')
      const response = await request.json()
      this.props.history.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
    
  }

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={ this.login }>
          { fields.map( ({type,label,name,required}) =>
            <Field 
              key={'input_' + name}
              type={type} 
              label={label} 
              name={name}
              required={required}
               />
              
          )}
        </Form> 
      </div>
    );
  }
}

export default Login
