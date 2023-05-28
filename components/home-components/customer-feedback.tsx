import {
  Box,
  Card,
  CardActions,
  CardContent,
  styled,
  Theme,
  Typography,
} from '@mui/material'
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined'
import React, { FC } from 'react'
import { RowWrapper } from '../common-styled'

export const CustomerFeedback: FC = () => (
  <CustomerFeedbackStyled data-aos="fade-up">
    <MapToCustomerFeedback />
  </CustomerFeedbackStyled>
)

export const MapToCustomerFeedback: FC = () => (
  <>
    {customerFeedbackConfig.map(({ message, customerName }, index) => (
      <Card
        key={[customerName, index].join('-')}
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.background.default,
        }}
      >
        <FeedbackIconStyled>
          <PersonPinOutlinedIcon color="primary" fontSize="large" />
        </FeedbackIconStyled>
        <CardContent>
          <FeedbackMessageBox>{message}</FeedbackMessageBox>
        </CardContent>
        <CardActions>
          <Typography fontSize={14} color="GrayText" px={1}>
            {customerName}
          </Typography>
        </CardActions>
      </Card>
    ))}
  </>
)

export const CustomerFeedbackStyled = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '24% 24% 24% 24%',
  gap: 25,
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
}))

export const FeedbackIconStyled = styled(RowWrapper)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
}))

export const FeedbackMessageBox = styled(Box)(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(1),
}))

export interface CustomerFeedbackConfig {
  message: string
  customerName: string
}

export const customerFeedbackConfig: CustomerFeedbackConfig[] = [
  {
    message: `We had hired Toor Welding for our various jobs. Jarnail Toor is always humble and ready to help. 
        He is very professional and efficient. Best part about Toor Welding is they always finished our jobs on time and professionally.`,
    customerName: `Satwinder Mangat`,
  },
  {
    message: `We had hired Toor Welding to get our dry van trailers fixed. Jarnail is always available with his on-site service van. His jobs are always reliable.`,
    customerName: `Brad`,
  },
  {
    message: `Jarnail Toor did fabrication and welding for our excavating machines. He always gets job done with perfection.
         I will recommend Toor Welding if you have any kind of welding jobs.`,
    customerName: `Steven`,
  },
  {
    message: `Toor Welding is a reliable and efficient place to get job done. He had done Flux core welding for our heavy equipment.
         We as a construction company, recommend Toor Welding for any kind on-site welding repair.`,
    customerName: `Donney`,
  },
]
