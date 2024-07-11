//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "App Development Company | Professional App Developers",
  description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'App Development Company | Professional App Developers',
    description: 'BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/contact-us',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/contact-us' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}