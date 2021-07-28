import 'styled-components'

type ThemeContainer = {
  bg: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string
    name: string
    colors: {
      header: ThemeContainer
      content: ThemeContainer
      side: ThemeContainer
      primary: string
      text: string
    }
  }
}
