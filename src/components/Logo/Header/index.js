import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: block;
    padding: 2em 0;
    text-align: center;
    box-sizing: border-box;

    h2 {

    }

    h3 {
        font-weight: normal;
        font-size: 0.9em;
    }
`

const Header = ({name, tagline, src}) => (
    <Wrap>
        <div className="imgWrap">
            <img src={src} />
        </div>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
    </Wrap>
)

export default Header
