import React from 'react'
import styled,{css} from 'styled-components'

const btnBase = css`
    all:unset;    
    padding: 1rem;
    background: blue;
    color: #fff;
    display:block;
    width:100%;
    text-align:center;
    box-sizing: border-box;
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

const Button = (props) => <ButtonBtnBase>{props.children}</ButtonBtnBase>

const LinkButton = (props) => <LinkBtnBase href={props.href}>{props.children}</LinkBtnBase>

const Submit = (props) => <SubmitBtnBase value={props.children} type="submit"/>


export default (props) => {
    switch(props.type) {
        case "link":
            return <LinkButton />
        case "submit":
            return <Submit value={props.children}/>
        default:
            return <Button>{props.children}</Button>
    }
}
    