//===== Import Css =====
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
//===== Import Components =====
import Scripts from "./Scripts";
import ConditionalLayout from "./ConditionalLayout";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL('https://www.bitswits.co'),
  //===== Meta Tags =====
  title: "App Development Company | Professional App Developers",
  description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: "App Development Company | Professional App Developers",
    description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
    url: '/',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== GEO Tags =====
  other: {
    "DC.title": "App Development Company",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "App Development Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
  },
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0'],
      "dmca-site-verification": ['Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090'],
      "msvalidate.01": ['A21040CE08685574268E4A1F724E0FFD'],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
      <Scripts />
      <body>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
