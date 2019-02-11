import styled, {css} from 'styled-components'

export const headingBase = css`
    font-weight: lighter;
    color: ${props => props.theme.headings.color};
`

export const H1 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h1.size};
`

export const H2 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h2.size};
`

export const H3 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h3.size};
`

export const H4 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h4.size};
`

export const H5 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h5.size};
`

export const H6 = styled.h1`
    ${headingBase}
    font-size: ${props => props.theme.headings.h6.size};
`