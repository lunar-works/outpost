import React, { Component, PureComponent } from 'react'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'
import NavItems from '../../configs'

import Nav from '../../components/Nav'
import { NavLink } from "react-router-dom"

class Upsert extends PureComponent {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.renderField = this.renderField.bind(this)
  }

  state = {
    //model: this.props.match.params.model,
    model: NavItems.find(item => item.alias === this.props.match.params.model),
    loading: false,
    data: []
  }

  async componentDidMount() {
    //console.
    this.setState({
      loading: true
    }) 
    try {
      console.log(this.state.model.alias)
      // shove this alias in the fetch request for resources alias === resource url alias
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

  onSubmit(data) {
    console.log(data)
  }

  renderField({ type, label, name, required }) {
    const data = this.state.data
    return (
      <Field 
        key={ 'input_' + name }
        type={ type } 
        label={ label } 
        name={ name }
        required={ required }
        value={ data[name] || undefined }
      />
    )
  }

  render() {
    const {title, description, alias, fields} = this.state.model

    return(
      <div>
        <h2>{ title } View</h2>
        <p>{ description }</p>

          
        <Form
          onSubmit={ this.onSubmit }>
          { fields.map( (field) => this.renderField(field) )}
        </Form> 

      </div>
    )
  }


}
export default Upsert
