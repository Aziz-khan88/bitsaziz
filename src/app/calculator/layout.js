//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Calculator | BitsWits",
  description: "Calculator | BitsWits",
  //===== OG Tags =====
  openGraph: {
    title: 'Calculator | BitsWits',
    description: 'Calculator | BitsWits',
    url: '/calculator',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/calculator' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}