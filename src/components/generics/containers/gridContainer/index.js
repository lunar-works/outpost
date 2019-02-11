import React from 'react'
import styled,{css} from 'styled-components'

export const GridContainerBase = css`
    display: flex;
    height:100%;
    width: 100%;
    ${props => props.image 
        ? `
            background-image: url(${props.image});
            background-size: ${props.imageSize || 'cover'};
            background-repeat: no-repeat; 
            background-position:  ${props.imagePos || 'cover'};
        `
        : ` `
    }

    @media(max-width:500px){
        flex-direction: column;
    }
    `

const GridContainer = styled.div`
    ${GridContainerBase}
`

export default GridContainer