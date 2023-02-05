import React, { useContext } from 'react'
import { HeaderContainer } from './styles'
import ReactSwitch from 'react-switch'
import { shade } from 'polished'
import { ThemeContext } from 'styled-components'

interface HeaderProps {
  onThemeSwitch: () => void
}

export const Header: React.FC<HeaderProps> = ({ onThemeSwitch }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <span>Theme Switch</span>

      <ReactSwitch
        checked={title === 'light'}
        onChange={onThemeSwitch}
        uncheckedIcon={false}
        checkedIcon={false}
        width={50}
        height={20}
        handleDiameter={20}
        onColor={colors.secondary}
        offColor={shade(0.15, colors.primary)}
      />
    </HeaderContainer>
  )
}
