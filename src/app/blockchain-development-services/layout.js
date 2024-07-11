//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Blockchain Development Services - BitsWits",
  description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Blockchain Development Services - BitsWits',
    description: 'BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/blockchain-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/blockchain-development-services' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Blockchain Development Services",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Blockchain Development Services",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
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