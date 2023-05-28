import {
  Box,
  createTheme,
  CssBaseline,
  GlobalStyles,
  GlobalStylesProps,
  Palette,
  ThemeProvider,
} from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'
import { useThemeSwitch } from './theme-switch'

export function makeTheme(mode: Palette['mode']) {
  return createTheme({
    typography: {
      fontFamily: "'Nunito', sans-serif",
    },
    palette: {
      mode,
      primary: {
        main: '#AF524B',
      },
      secondary: {
        main: '#333',
      },
    },
  })
}

const globalStyles: GlobalStylesProps['styles'] = {
  html: {
    fontFamily: "'Nunito', sans-serif",
  },
  body: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
}

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { mode } = useThemeSwitch()

  return (
    <ThemeProvider theme={makeTheme(mode)}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
