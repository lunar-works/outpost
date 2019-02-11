import React from 'react'
import styled,{css} from 'styled-components'

const podBase = css`
    background: ${props => props.theme.containers.background || ''};
    border-radius: ${props => props.theme.main.borderRadius || ''};
    border: ${props => props.theme.containers.border || ''};
    margin: ${props => props.theme.containers.podSeperator || 0};
    min-width:300px;
    width: 100%;
`

const Pod = styled.article`
    ${podBase}
`

export default Pod