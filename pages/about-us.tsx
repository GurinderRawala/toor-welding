import { NextPage } from "next";
import Head from "next/head";
import { AboutUsComponent } from "../components/about-us-components";

const AboutUs: NextPage = () =>(
    <>
        <Head>
            <title>Toor Welding | About Us</title>
            <meta
                name="description"
                content="Toor Welding provides best welding service in GTA and Brampton"
            />
        </Head>
        <AboutUsComponent />
    </>
);

export default AboutUs