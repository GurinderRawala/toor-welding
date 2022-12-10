import { NextPage } from "next";
import Head from "next/head";
import { AboutUsComponent } from "../components/about-us-components";

const AboutUs: NextPage = () =>(
    <>
        <Head>
            <title>Toor Welding | About Us</title>
            <meta
                name="description"
                content="Toor Welding is located in Brampton and provides on-site Aluminum Welding, Mig Welding and Flux Core along with trailer and truck welding repairs. 
                Jarnail Singh Toor with 10 years of experience is always ready to deliver excellence."
            />
        </Head>
        <AboutUsComponent />
    </>
);

export default AboutUs