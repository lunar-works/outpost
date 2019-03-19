import React, { Component } from 'react'
import styled from 'styled-components'

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


    render() {
        const {data, headers} = this.props
        return (
            <Wrap onSubmit={this.submit}>
                <Fields>
                    { data.map((item) => this.renderField(item, headers)) }
                </Fields>
                <Submit>

                </Submit>
            </Wrap>
        )
    }
}

export default Form;