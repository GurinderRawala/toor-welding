import type { NextPage } from 'next'
import Head from 'next/head'
import {
  CustomerFeedback,
  StatmentSection,
  WhatWeOffer,
  WhyChooseUs,
} from '../components/home-components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toor Welding | Home</title>
        <meta
          name="description"
          content="Toor Welding is located in Brampton and provides on-site Aluminum Welding, Mig Welding and Flux Core along with trailer and truck welding repairs. 
                    Jarnail Singh Toor with 10 years of experience is always ready to deliver excellence."
        />
      </Head>

      <StatmentSection />
      <WhatWeOffer />
      <WhyChooseUs />
      <CustomerFeedback />
    </>
  )
}

export default Home
