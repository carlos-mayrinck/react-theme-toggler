import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`
