import type { NextPage } from 'next';
import Head from 'next/head';
import { StatmentSection, WhatWeOffer, WhyChooseUs } from '../components/home-components';

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
            <WhyChooseUs />
       
        </>
    );
};

export default Home;