import 'styled-components'
import colors from '../theme/colors'

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
      card: ThemeContainer
      side: ThemeContainer
      primary: string
      text: string
    } & typeof colors
  }
}
