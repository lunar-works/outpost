import React from 'react'
import styled,{css} from 'styled-components'

const btnBase = css`   
    padding: 1rem 2rem;
    ${props => props.transparent === undefined
    ? `background: ${props.theme.buttons.background};`
    : `border: 1px solid ${props.theme.buttons.background};
       background: transparent;
      `
    }
    text-decoration:none;
    color: #fff;
    
    ${props => props.type === "full"
        ?`display:block;`
        :`display:inline-block;`
    }
    text-align:center;
    box-sizing: border-box;
    text-transform: uppercase;
    border-radius: ${props => props.theme.buttons.borderRadius}
    &:hover {
        cursor: pointer;
    }
`

const LinkBtnBase = styled.a`
    ${btnBase}
`

const SubmitBtnBase = styled.input`
    ${btnBase}
`

const ButtonBtnBase = styled.input`
    ${btnBase}
`

const Button = (props) => <ButtonBtnBase {...props}>{props.children}</ButtonBtnBase>

const LinkButton = (props) => <LinkBtnBase {...props} href={props.href}>{props.children}</LinkBtnBase>

const Submit = (props) => <SubmitBtnBase {...props} value={props.value} type="submit"/>


export default (props) => {
    switch(props.type) {
        case "link":
            return <LinkButton {...props}>{props.children}</LinkButton>
        case "submit":
            return <Submit {...props}  value={props.value}/>
        default:
            return <Button {...props}>{props.children}</Button>
    }
}
    