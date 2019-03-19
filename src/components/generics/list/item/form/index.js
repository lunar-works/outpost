import React, { Component } from 'react'
import styled from 'styled-components'

import FormModule from '../../../form'
import {Select, CheckBox, Radio, Field} from '../../../form/fields'

const Wrap = styled.form`

`
const Fields = styled.div`

`
const Submit = styled.div`

`

class Form extends Component  {

    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit() {

    }

    renderField() {
        
        return (
            <div>field</div>
        )
    }

    renderFields() {
        const {data, headers} = this.props

        return data.map((item,key) => {
            const {editable, title, type, options=[]} = headers[key]
            
            switch(type) {
                case 'select':
                    return <Select label={title} disabled={!editable} options={options} />
                
                case 'checkbox':
                    return <CheckBox label={title} disabled={!editable}  />

                case 'radio':
                    return <Radio label={title} disabled={!editable} />

                default:
                    return <Field label={title} disabled={!editable} />
            }
        })
    }

    render() {
        return (
            <FormModule>
                { this.renderFields() }
            </FormModule>
        )
    }
}

export default Form;