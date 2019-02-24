import React, { Component, PureComponent } from 'react'
import axios from 'axios'

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
    const history = this.props.history
    axios.post('https://skylab.lunarworks.io/admin/api/login', {
      'email': data.email,
      'password': data.password 
    })
    .then(function (response) {
      console.log(response)
      history.push('/dashboard')
    })
    .catch(function (error) {
      console.log(error)
    })
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
