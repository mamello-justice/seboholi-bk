import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { Layout, Space, Switch, Typography } from 'antd'

import themes, { Themes } from '../../theme'

const { Header } = Layout
const { Text } = Typography

interface HeaderComponentProps {
  setTheme: (theme: Themes) => void
}

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.header.bg};

  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const HeaderComponent: FC<HeaderComponentProps> = ({ setTheme }) => {
  const theme = useTheme()

  const isDarkTheme = theme.id === themes.dark.id

  const toggleTheme = () => {
    setTheme(isDarkTheme ? Themes.light : Themes.dark)
  }

  return (
    <StyledHeader>
      <Space>
        <Text>Dark Mode</Text>
        <Switch checked={isDarkTheme} onChange={toggleTheme} />
      </Space>
    </StyledHeader>
  )
}

export default HeaderComponent
