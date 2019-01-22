import React, { Component, PureComponent } from 'react'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'
import NavItems from '../../configs'

import Nav from '../../components/Nav'
import { NavLink } from "react-router-dom"

class Upsert extends PureComponent {

  constructor(props) {
    super(props)
  }

  state = {
    //model: this.props.match.params.model,
    model: NavItems.find(item => item.alias === this.props.match.params.model),
    loading: false,
    data: []
  }

  async componentDidMount() {
    console.log(this.props.match.params.model)
    console.log(NavItems.find(item => item.alias === this.state.model))
    //console.
    this.setState({
      loading: true
    }) 
    try {
      const request = await fetch('https://outpost.lunarworks.io/post.json')
      const response = await request.json()
      this.setState({
        loading: false,
        data: response
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {title, description, alias, fields} = this.state.model
    const data = this.state.data


    console.log(this.state.model)
    console.log(data)

    return(
      <div>
        <h2>{ title } View</h2>
        <p>{ description }</p>


        <Form
          onSubmit={ () => {} }>
          { fields.map( ({ type, label, name, required }) =>
            <Field 
              key={ 'input_' + name }
              type={ type } 
              label={ label } 
              name={ name }
              required={ required }
              value={ data[name] || undefined }
            />
              
          )}
        </Form> 


      </div>
    )
  }


}
export default Upsert
