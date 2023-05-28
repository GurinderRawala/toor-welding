import { Box, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { ResponsiveImage } from '../responsive-image'
import { ColumnWrapper } from '../common-styled'

export const StatmentSection: FC = () => (
  <StatmentSectionStyled>
    <ColumnWrapper data-aos="fade-up">
      <ResponsiveImage src={statetmentConfig.imgUrl} />
    </ColumnWrapper>
    <Box className="__detailBox" data-aos="fade-up">
      <Typography variant="h2">{statetmentConfig.title}</Typography>
      <Typography className="__punchLine">
        {statetmentConfig.punchLine}
      </Typography>
      <Typography mt={1}>{statetmentConfig.body.partOne}</Typography>
      <Typography>{statetmentConfig.body.partTwo}</Typography>
    </Box>
  </StatmentSectionStyled>
)

export const StatmentSectionStyled = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '45% 1fr',
  gap: 20,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  '& > .__detailBox': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: theme.spacing(1),
    '& > .__statementTitle': {
      fontSize: 44,
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: 22,
      },
    },
    '& > .__punchLine': {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export type StatementConfig = {
  title: string
  punchLine: string
  imgUrl: string
  body: {
    partOne: string
    partTwo: string
  }
}

export const statetmentConfig: StatementConfig = {
  title: 'Toor Welding Inc.',
  punchLine: `Brampton’s Leading Metal Repair Company`,
  imgUrl: `https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  body: {
    partOne: ` Are you looking for a full-service welding service provider in Brampton? Is your truck in need of roof skin and panel repairs? Whatsoever be your needs,
        Toor Welding Inc. is here to serve you. Ever since our inception, we are providing our clients with quality work, on-time projects, and professional repairs.`,
    partTwo: `Toor Welding is best in business and provides on-site welding repair. 
        Toor Welding is always handy and just one call away from you. You can contact us, and we will be there to help you.`,
  },
}
