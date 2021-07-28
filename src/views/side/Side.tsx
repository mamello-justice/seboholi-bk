import React, { FC } from 'react'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  min-height: calc(100vh - 64px - 70px);
  background-color: ${({ theme }) => theme.colors.content.bg};

  .ant-menu {
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
  }
`

const Side: FC = () => {
  return (
    <StyledSider>
      <Menu>
        <Menu.Item key='home'>Home</Menu.Item>
      </Menu>
    </StyledSider>
  )
}

export default Side
