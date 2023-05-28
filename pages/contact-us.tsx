import { NextPage } from 'next'
import Head from 'next/head'
import { ContactUsComponent } from '../components/contact-us-component'

const ContactUs: NextPage = () => (
  <>
    <Head>
      <title>Toor Welding | Contact Us</title>
      <meta
        name="description"
        content="Toor Welding is located in Brampton and provides on-site Aluminum Welding, Mig Welding and Flux Core along with trailer and truck welding repairs. 
                Jarnail Singh Toor with 10 years of experience is always ready to deliver excellence."
      />
    </Head>
    <ContactUsComponent />
  </>
)

export default ContactUs
