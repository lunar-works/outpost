import React from 'react'
import styled,{css} from 'styled-components'

export const CenterContainerBase = css`
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
    flex-direction: row;
`

const CenterContainer = styled.div`
    ${CenterContainerBase}
`

export default CenterContainer