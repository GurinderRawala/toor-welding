import React, { FC } from 'react'
import { useThemeSwitch } from '../../theme-provider/theme-switch'
import { Box, IconButton, SxProps, Theme } from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

export const ThemeSwitch: FC = () => {
  const { mode, switchMode } = useThemeSwitch()

  const iconColor: SxProps<Theme> = (theme) => ({
    color: theme.palette.grey[200],
  })

  return (
    <IconButton>
      {mode === 'dark' && <LightModeIcon onClick={() => switchMode('light')} />}
      {mode === 'light' && <DarkModeIcon onClick={() => switchMode('dark')} />}
    </IconButton>
  )
}
