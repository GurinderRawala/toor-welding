import { Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { ColumnWrapper, ResponsiveContainer } from '../common-styled'
import { WeldingWrapperStyled as AboutUsWrapperStyled } from '../services-components'
import { PhotoViewer } from '../photo-gallery'
import { LogoIcon } from '../logo-icon'

export const AboutUsComponent: FC = () => {
  const {
    palette: { mode },
  } = useTheme()
  return (
    <ResponsiveContainer>
      <AboutUsWrapperStyled
        sx={{ gridTemplateColumns: 'auto 30%', minHeight: 0 }}
      >
        <ColumnWrapper sx={{ justifyContent: 'flex-start' }} data-aos="fade-up">
          <Typography>{aboutUsComponentConfig.intro}</Typography>
          <Typography>{aboutUsComponentConfig.introPart}</Typography>
        </ColumnWrapper>
        <ColumnWrapper sx={{ justifyContent: 'flex-start' }}>
          <LogoIcon
            viewBox="0 0 510.000000 489.000000"
            sx={{ height: 200, width: 200 }}
            color={mode === 'light' ? 'secondary' : 'primary'}
          />
        </ColumnWrapper>
      </AboutUsWrapperStyled>
      <Typography
        variant="h2"
        py={2}
        textAlign="center"
        color={(theme) => theme.palette.text.primary}
      >
        {aboutUsComponentConfig.jobs}
      </Typography>
      <PhotoViewer />
      <ColumnWrapper sx={{ gap: 10 }} mb={10} p={2}>
        <Typography variant="h2" color={(theme) => theme.palette.text.primary}>
          {aboutUsComponentConfig.sectionOne.heading}
        </Typography>
        <Typography color={(theme) => theme.palette.text.primary}>
          {aboutUsComponentConfig.sectionOne.body}
        </Typography>
      </ColumnWrapper>
      <ColumnWrapper sx={{ gap: 10 }} p={2} data-aos="fade-up">
        <Typography variant="h2" color={(theme) => theme.palette.text.primary}>
          {aboutUsComponentConfig.sectionTwo.heading}
        </Typography>
        <Typography color={(theme) => theme.palette.text.primary}>
          {aboutUsComponentConfig.sectionTwo.body}
        </Typography>
      </ColumnWrapper>
    </ResponsiveContainer>
  )
}

export const aboutUsComponentConfig = {
  intro: `Toor Welding Inc. is a leading welding company in Brampton that is proudly serving the local residents with highly effective and reliable welding services. With a team of licensed and insured welders, we know how to bring your damaged metal equipment back into shape.
    By exceeding our client’s expectations with 100% satisfied services, we have managed to earn an industry reputation.`,
  introPart: `We believe in delivering quality repairs at affordable costs. Our professionals know how worthy is your investment and strive to deliver the best value welding services. 
    We have recently shifted to Brampton and our state-of-the-art facility is fully equipped with modern tools and equipment.`,
  sectionOne: {
    heading: `Our Mission & Philosophy`,
    body: `At Toor Welding Inc., we strive to be one of the most trusted custom aluminum welders and steel fabricators in the Brampton region. We have partnered with the leading suppliers and brands to provide top-notch repairs and replacements.
        We understand our client’s needs completely and then formulate a welding approach that meets the local standards.`,
  },
  sectionTwo: {
    heading: `The Toor Welding Inc. Difference`,
    body: ` Being a full-service company, we handle a wide range of welding and fabrication projects for residential, commercial and industrial clients. To prevent any hassles, we deliver efficient on-site repairs with a fast response time.
         We value our customers and strive to go beyond their expectations with quality services.`,
  },
  jobs: `Work Diaries`,
}
