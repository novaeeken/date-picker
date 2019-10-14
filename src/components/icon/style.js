// Base
import styled from 'styled-components'

// Style
export const IconElement = styled.i`
    font-family: ${ props => props.theme.iconCollection.fontFamily };
    font-style: normal;

    &:after {
      content: '${ props => props.theme.iconCollection.icons[props.icon] }'
    }
`

export default null
