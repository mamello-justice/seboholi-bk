import { useState, useEffect } from 'react'
import { DefaultTheme } from 'styled-components'

import { getLocalStorageItem, setLocalStorageItem } from './../utils/storage'

import colors from './colors'

export enum Themes {
  light = 'light',
  dark = 'dark'
}

const commonColors = {
  header: {
    bg: colors.blackRussian
  },
  footer: {
    bg: colors.blackRussian
  },
  primary: colors.carabianGreen
}

const themes: Record<Themes, DefaultTheme> = {
  [Themes.light]: {
    id: 'T_001',
    name: 'Light Theme',
    colors: {
      ...colors,
      ...commonColors,
      content: {
        bg: colors.solitude
      },
      card: {
        bg: colors.white
      },
      side: {
        bg: colors.solitude
      },
      text: colors.blackRussian
    }
  },
  [Themes.dark]: {
    id: 'T_002',
    name: 'Dark Theme',
    colors: {
      ...colors,
      ...commonColors,
      content: {
        bg: colors.darkGrey
      },
      card: {
        bg: colors.blackRussian
      },
      side: {
        bg: colors.darkGrey
      },
      text: colors.floralWhite
    }
  }
}

export const useTheme = (): [DefaultTheme, (id: Themes) => void] => {
  const [chosenTheme, setChosenTheme] = useState(themes.light)

  const setTheme = (id: Themes) => {
    setLocalStorageItem('theme', id)
    setChosenTheme(themes[id])
  }

  useEffect(() => {
    const localTheme = getLocalStorageItem('theme')
    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    ).matches
    setChosenTheme(localTheme ?? prefersDark ? themes.dark : themes.light)
  }, [])

  return [chosenTheme, setTheme]
}

export default themes
