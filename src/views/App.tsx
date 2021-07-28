import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from 'antd'

import { useTheme } from '../theme'

import { Header } from './header'
import { Content } from './content'

const { Footer } = Layout

const App: FC = () => {
  const [theme, setTheme] = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header setTheme={setTheme} />
        <Content />
        <Footer style={{ textAlign: 'center' }}>Seboholi ©2021</Footer>
      </Layout>
    </ThemeProvider>
  )
}

export default App
