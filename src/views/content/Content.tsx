import React, { FC } from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Content } = Layout

const StyledContent = styled(Content)`
  min-height: calc(100vh - 64px - 70px);
  background-color: ${({ theme }) => theme.colors.content.bg};
`

const HeaderComponent: FC = () => {
  return <StyledContent></StyledContent>
}

export default HeaderComponent
