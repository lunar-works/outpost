import React, { PureComponent } from 'react'

import styled from 'styled-components'

const Wrap = styled.form`

`

class Form extends PureComponent {

      constructor(props) {
            super(props)
            this.submit = this.submit.bind(this)
      }

      validate() {

      }

      submit(e) {
            e.preventDefault()
            const form = [...this.refs.form]
                  .filter( (item) => item.name.length > 0 && !item.validity.valid)
            if(form.length === 0 && typeof this.props.onSubmit === 'function') {
                  const formData = [...this.refs.form]
                        .filter( (item) => item.name.length > 0)
                        .reduce((total, current) => {
                              total[current.name] = current.value
                              return total;
                        }, {})
                  console.log(formData)
                  this.props.onSubmit(formData)
            } else {
                  console.log(typeof this.props.onSubmit === 'function')
                  console.log(form)
                  alert('NO')
            }
      }

      render() {
            const { children } = this.props
            return(
                  <Wrap 
                        ref='form'
                        onSubmit={this.submit}
                  >
                        { children.map(item =>
                              React.cloneElement(item, {onInput: this.validate})
                        )}
                        <div>
                              <input type="submit" value="Submit" /> 
                        </div>
                  </Wrap>
            )
      }
}

export default Form;
