import type { AppProps } from 'next/app'
import { AosInit } from '../aos-service'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import { AppThemeProvider } from '../theme-provider'
import { AppProvider } from '../app-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppThemeProvider>
        <AosInit />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppThemeProvider>
    </AppProvider>
  )
}
