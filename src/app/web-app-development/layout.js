//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top-Rated Web App Development Company | Web App Developers",
  description: "Looking for a top-rated web app development company? Our team of skilled web app developers specializes in crafting high-quality and customized web applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top-Rated Web App Development Company | Web App Developers',
    description: 'Looking for a top-rated web app development company? Our team of skilled web app developers specializes in crafting high-quality and customized web applications.',
    url: '/web-app-development',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/web-app-development' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Web App Development Company",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Web App Development Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
  },
}

export default function RootLayout({ children }) {
  return (children);
}