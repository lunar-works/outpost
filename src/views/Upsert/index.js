import React, { Component, PureComponent } from 'react'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'

import NavItems from '../../configs'
import Nav from '../../components/Nav'

import styled from 'styled-components'

const Wrap = styled.div`
  h2 {
    text-transform: capitalize;
    padding-bottom: 2em;
  }

  form {
    max-width: 800px;
    margin: 0 auto;
  }

`

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
      <Wrap>
        <h2>{ title } View</h2>
        <p>{ description }</p>

          
        <Form
          onSubmit={ this.onSubmit }>
          { fields.map( (field) => this.renderField(field) )}
        </Form>

      </Wrap>
    )
  }


}
export default Upsert
