import { NextPage } from "next";
import Head from "next/head";
import { AluminumWelding, TrailerRepair, TrailerRoofRepair } from "../components/services-components";

const Services: NextPage = () => (
    <>
        <Head>
            <title>Toor Welding | Services</title>
            <meta
                name="description"
                content="Toor Welding provides best welding service in GTA and Brampton"
            />
        </Head>
        <AluminumWelding />
        <TrailerRepair />
        <TrailerRoofRepair />
    </>
)

export default Services;