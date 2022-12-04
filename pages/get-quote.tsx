import { NextPage } from "next";
import Head from "next/head";
import { GetQuoteComponent } from "../components/get-quote-component";

const GetQuote: NextPage = () =>(
    <>
        <Head>
            <title>Toor Welding | Get A Quote</title>
            <meta
                name="description"
                content="Toor Welding provides best welding service in GTA and Brampton"
            />
        </Head>
        <GetQuoteComponent />
    </>
)

export default GetQuote