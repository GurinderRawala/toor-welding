import type { AppProps } from 'next/app'
import { AosInit } from '../aos-service'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import { AppThemeProvider } from '../theme-provider'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppThemeProvider>
            <>
                <AosInit />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </>
        </AppThemeProvider>
    )
}
