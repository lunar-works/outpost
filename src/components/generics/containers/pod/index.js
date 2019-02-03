import React from 'react'
import styled,{css} from 'styled-components'

const podBase = css`
    background: ${props => props.theme.containers.background || ''};
    border-radius: ${props => props.theme.main.borderRadius || ''};
    border: ${props => props.theme.containers.border || ''};
    marign: ${props => props.theme.containers.margin || 0};
`

const Pod = styled.article`
    ${podBase}
`

export default Pod