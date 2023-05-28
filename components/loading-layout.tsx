import React, { FC } from 'react'
import {
  CircularProgress,
  Box,
  BoxProps,
  styled,
  SvgIconProps,
} from '@mui/material'
import { LogoIcon } from './logo-icon'

export interface LoadingLayoutProps {
  outerWrapperProps?: BoxProps
  logoIconProps?: SvgIconProps
}
export const LoadingLayout: FC<LoadingLayoutProps> = ({
  outerWrapperProps,
  logoIconProps,
}) => (
  <LoadingLayoutStyled {...outerWrapperProps}>
    <LogoIcon sx={{ height: 150, width: 150 }} {...logoIconProps} />
    <CircularProgress />
  </LoadingLayoutStyled>
)

export const LoadingLayoutStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  gap: theme.spacing(1),
}))
