//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Video Explainer | BitsWits",
  description: "BitsWits.",
  //===== OG Tags =====
  openGraph: {
    title: 'Video Explainer | BitsWits',
    description: 'BitsWits.',
    url: '/video-explainer-lp',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/video-explainer-lp' },
  //===== GEO Tags =====
  other: {

  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <meta name="robots" content="noindex" />
      {children}
    </>
  );
}