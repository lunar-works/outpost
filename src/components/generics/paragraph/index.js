import React from 'react'
import styled,{css} from 'styled-components'

const paragraphBase = css`
    margin: 1rem 0;
    color: #666;
    line-height:170%;
`

const paragraph = styled.p`
    ${paragraphBase}
`

export default paragraph