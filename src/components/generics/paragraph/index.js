import React from 'react'
import styled,{css} from 'styled-components'

const paragraphBase = css`
    margin-bottom:5px;
    font-size: 0.9rem;
    color: #666;
`

const paragraph = styled.p`
    ${paragraphBase}
`

export default paragraph