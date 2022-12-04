import { NextPage } from "next";
import Head from "next/head";
import { ContactUsComponent } from "../components/contact-us-component";

const ContactUs: NextPage = () =>(
    <>
        <Head>
            <title>Toor Welding | Contact Us</title>
            <meta
                name="description"
                content="Toor Welding provides best welding service in GTA and Brampton"
            />
        </Head>
        <ContactUsComponent />
    </>
)

export default ContactUs