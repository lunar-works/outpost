import React from 'react'
import styled,{css} from 'styled-components'

export const ContentBase = css`
    width: 100%;
    padding: ${props => props.theme.containers.padding}
`

const Content = styled.div`
    ${ContentBase}
`

export default Content