import React from 'react'
import styled, {css} from 'styled-components'

export const mastBase = css`
    display:flex;
    align-items: center;
    height:100%;
    padding:1rem;
    box-sizing: content-box;
    background: ${props => props.theme.mast.background};
    ${props => props.position === "top"
        ?  `
            top:0;
            position:fixed;
            height:auto;
            width:100%;
            flex-direction: row;
        `
        : ``
    }
    ${props => props.theme.mast.shadow
        ? `
            box-shadow: 1px 0 3px rgba(0,0,0,0.3);
        `
        : ``
    }
`

const Mast = styled.div`
    ${mastBase}
`

export default (props) => 
    <Mast position={props.position}>
        {props.children}
    </Mast>