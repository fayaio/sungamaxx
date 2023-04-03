import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sungamax</title>
        <meta
          name="description"
          content="To Elevate The Spiritual And Financial Well-Being Of Humanity"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b84195" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen flex flex-col`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
