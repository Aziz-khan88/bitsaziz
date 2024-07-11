//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Service Page | Bitswits",
  description: "Bitswits",
  //===== OG Tags =====
  openGraph: {
    title: 'Service Page | Bitswits',
    description: 'Bitswits',
    url: '/bitswits-services-page-1',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-1' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}