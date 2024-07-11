//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Business Intelligence Software Development - BitsWits",
  description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Business Intelligence Software Development - BitsWits',
    description: 'BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/business-intelligence-software-development',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/business-intelligence-software-development' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Business Intelligence Software Development",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Business Intelligence Software Development",
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