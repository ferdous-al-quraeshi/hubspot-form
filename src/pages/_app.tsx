import { HubspotProvider } from 'next-hubspot';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HubspotProvider>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      ) : null}
      <Component {...pageProps} />
    </HubspotProvider>
  )
}
