import styled, {css} from 'styled-components'

export const PrimaryNavBase = css`
    ul {
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        ${props => props.position === "top"
        ?  `
            flex-direction: row;
        `
        : `flex-direction:column;`
    }
    li{
        ${props => props.position === "top"
        ?  `
            margin-left: 1rem;
        `
        : ``
    }
`

const PrimaryNav = styled.nav`
    ${PrimaryNavBase}  
`

export default ({items, position}) => 
    <PrimaryNav position={position}>
        <ul>
            {items.map(item => 
                <li>{item.component || <a href={item.url}>{item.alias}</a>}</li>
            )}
        </ul>
    </PrimaryNav>