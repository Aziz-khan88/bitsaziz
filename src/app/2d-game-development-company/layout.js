//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "2D Game Development Company | 2D Game Developers",
  description: "Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls.",
  //===== OG Tags =====
  openGraph: {
    title: '2D Game Development Company | 2D Game Developers',
    description: 'Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls.',
    url: '/2d-game-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/2d-game-development-company' },
  //===== GEO Tags =====
  other: {
    "DC.title": "2D Game Development Company",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "2D Game Development Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
  },
}

export default function RootLayout({ children }) {
  return (children);
}