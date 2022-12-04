import type { AppProps } from 'next/app'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import { AppThemeProvider } from '../theme-provider'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppThemeProvider>
            <>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </>
        </AppThemeProvider>
    )
}
