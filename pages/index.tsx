import type { NextPage } from 'next';
import Head from 'next/head';
import { StatmentSection, WhatWeOffer } from '../components/home-components';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Toor Welding | Home</title>
                <meta
                    name="description"
                    content="Toor Welding provides best welding service in GTA and Brampton"
                />
            </Head>

            <StatmentSection />
            <WhatWeOffer />
       
        </>
    );
};

export default Home;