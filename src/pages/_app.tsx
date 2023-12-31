import { DefaultSeo } from 'next-seo';
// @ts-ignore
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/Layout';
import { DEFAULT_GRAPH_METADATA } from '@/configs/next-seo.config';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>
      <DefaultSeo {...DEFAULT_GRAPH_METADATA} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
