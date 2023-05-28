import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { CSSProperties } from 'react'

export const RowWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: 5,
})

export const ColumnWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ResponsiveContainer = styled(Box)(({ theme }) => ({
  width: '80%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

export const smallScreenFlex: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: 10,
  alignItems: 'center',
}
