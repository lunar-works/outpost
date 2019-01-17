import React, { Component } from 'react'
import Form from './components/Form'
import Field from './components/Form/Field'

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


class App extends Component {

  validate() {

  } 

  async login(data) {
    console.log('data',data)
    try {
      const request = await fetch('https://outpost.lunarworks.io/data.json')
      const response = await request.json()
      console.log(response)
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

export default App;
