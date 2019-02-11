import styled, {css} from 'styled-components'

export const mastBase = css`
    display:flex;
    position:fixed;
    align-items: center;
    box-sizing: content-box;
    background: ${props => props.theme.mast.background};
    ${props => props.position === "top"
        ?  `
            top:0;
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