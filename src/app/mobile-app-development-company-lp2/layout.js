//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile App Development Company - BitsWits",
  description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Mobile App Development Company - BitsWits',
    description: 'BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/mobile-app-development-company-lp2',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-lp2' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (
    <>
      <meta name="robots" content="noindex" />
      {children}
    </>
  );
}