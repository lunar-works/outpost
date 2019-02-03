import React from 'react'
import styled,{css} from 'styled-components'

export const HeaderBase = css`
    padding: ${props => props.theme.containers.padding}
`

const Header = styled.header`
    ${HeaderBase}
`

export default Header