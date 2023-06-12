export const DEFAULT_GRAPH_METADATA = {
  title: 'nextjs-tailwindcss-daisyui',
  description:
    'nextjs-tailwindcss-daisyui This example uses more of the available config options.',
  canonical: 'https://nextjs-tailwindcss-daisyui.vercel.app/',
  openGraph: {
    url: 'https://nextjs-tailwindcss-daisyui.vercel.app/',
    title: 'nextjs-tailwindcss-daisyui',
    description: 'nextjs-tailwindcss-daisyui Description',
    images: [
      {
        url: 'https://nextjs-tailwindcss-daisyui.vercel.app/logo_og.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
      {
        url: 'https://nextjs-tailwindcss-daisyui.vercel.app/logo_og.png',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
        type: 'image/jpeg',
      },
      { url: 'https://nextjs-tailwindcss-daisyui.vercel.app/logo_og.png' },
      { url: 'https://nextjs-tailwindcss-daisyui.vercel.app/logo_og.png' },
    ],
    siteName: 'nextjs-tailwindcss-daisyui site name',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '1234567890',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  dangerouslySetAllPagesToNoIndex: false,
  dangerouslySetAllPagesToNoFollow: false,
  noindex: false,
  nofollow: false,
};
