import { NextPage } from "next";
import Head from "next/head";
import { GetQuoteComponent } from "../components/get-quote-component";

const GetQuote: NextPage = () =>(
    <>
        <Head>
            <title>Toor Welding | Get A Quote</title>
            <meta
                name="description"
                content="Toor Welding is located in Brampton and provides on-site Aluminum Welding, Mig Welding and Flux Core along with trailer and truck welding repairs. 
                Jarnail Singh Toor with 10 years of experience is always ready to deliver excellence."
            />
        </Head>
        <GetQuoteComponent />
    </>
)

export default GetQuote