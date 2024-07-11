"use client"
import React, { useEffect, useState } from "react";
import Script from "next/script";
// css
import styles from "@/styles/bannerlp.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// components
import Bannerlp from "../../components/Bannerlp";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import AppsJourney from "@/src/components/NewMobileApp/AppsJourney/AppsJourney";
import Whowearenew from '@/src/components/NewMobileApp/WhoWeAre/WhoWeAre';
import Nothing from "../../components/Nothing";
import Expertapp from "../../components/Expertapp";
import ProjectProcesslp1 from "../../components/ProjectProcesslp1";
import LpChoose from "../../components/LpChoose";
import Technologieslp from "../../components/Technologieslp";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";
import Industries from "@/src/components/NewMobileApp/Industries/Industries";
import AppsLived from "@/src/components/NewMobileApp/AppsLived/AppsLived";
import HomeCaseStudies from "@/src/components/HomeCaseStudies";
import HomeNewWhoWeAre from "@/src/components/HomeNewWhoWeAre";
import HomeIndustries from "@/src/components/HomeIndustries";
import ServiceNothing from "@/src/components/ServiceNothing";

export default function gamedevelopmentcompany() {
  const [showDesktopComponents, setShowDesktopComponents] = useState(false);
  const [showMobileComponents, setShowMobileComponents] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true);
    }, 500);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(desktopTimer);
    };
  }, []);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true);
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll);
    window.addEventListener("touchstart", handleTouchOrScroll);

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };
  }, []);

  // Who We Are Content
  const WhoWeAre = {
    title: "Who We Are",
    desc: <>Discover excellence in app innovation with Bitswits, a leading <span>mobile app development company.</span> We turn your ideas into impactful <span>mobile app solutions.</span> Our expertise isn't just in coding; it's about understanding your needs and delivering an app that resonates with your audience. Experience the <span>Bitswits</span> difference: where expertise meets excellence, and your vision becomes a reality.
    </>,
    subtitleOne: "Soul Scribe ",
    subDescOne: "Soul Scribe is a groundbreaking social networking app which functions as digital diary, and you can enlist your loved ones to be part of you online journal. The app operates by using the freemium subscription model, providing a complimentary family room option that enables users to welcome someone from their circle of friends to share their memories. Users have the privilege to create and share profound moments with their loved ones. This makes Soul Scribe a social media experience that is different and personal.",
    subtitleTwo: "Ready App",
    subDescTwo: "The Ready App is a revolutionary platform invented to revolutionize the hiring process for the transportation industry. It fills the communication gap between drivers and recruiters by having an user-friendly interface along with features like secure messaging, personal meetings and real-time updates. Our platform solve issues such as data security, algorithm revisions, and user interface design among others in order to have a scalable and mutually beneficial solution. ",
    subtitleThree: "Greasy Monkey ",
    subDescThree: "Grease Monkey is a comprehensive automotive innovation system which provides everything ranging from car repairs to oil checkup. Serving as an independent app, Grease Monkey presents users with important factors to consider such as prices and locations and also client ratings for your vehicles. The app takes the convenience to a different level altogether.. With Grease Monkey, car owners can do regular maintenance for their cars in an easy way by just a few taps on their smartphones."
  }
  return (
    <>
      <Bannerlp
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Top Mobile App Development Company
            </h1>
          </>
        }
        para={
          <>
            <p className="font20 white center mb-3">
              Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span>
            </p>
          </>
        }
        btn2={
          <>
            <div className={styles.pont}>
              <a className={`pink ${styles.about}`} href="javascript:$zopim.livechat.window.show();">
                Transform Your App Idea Into A Success Story - Today Is The Day
                To Start!
              </a>
            </div>
          </>
        }
        newHomeBgprops="newHomeBg"
      />
      <People People="people" />
      {isMobile ? (
        showMobileComponents && (
          <>
            <HomeBannerSliderlp />
            <HomeNewWhoWeAre content={WhoWeAre} />
            <ServiceNothing Nothing="nothing" />
            <HomeCaseStudies />
            <Expertapp expertapp="expertapp" />
            <ProjectProcesslp1 processclass="process" />
            <HomeIndustries />
            <LpChoose transform="transform" />
            <Technologieslp />
            <Justbuilditlp
              title={
                <>
                  <h2 className={stylesjust.just}>Just Build It.</h2>
                </>
              }
              para={
                <>
                  <h3 className={stylesjust.develop}>
                    Design, Develop, and Grow with BitsWits.
                  </h3>
                </>
              }
              slide="slide1lp"
            />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <NewFaqslp />
            <HomeLocationlp />
          </>
        )
      ) : (
        showDesktopComponents && (
          <>
            <HomeBannerSliderlp />
            <HomeNewWhoWeAre content={WhoWeAre} />
            <ServiceNothing Nothing="nothing" />
            <HomeCaseStudies />
            <Expertapp expertapp="expertapp" />
            <ProjectProcesslp1 processclass="process" />
            <HomeIndustries />
            <LpChoose transform="transform" />
            <Technologieslp />
            <Justbuilditlp
              title={
                <>
                  <h2 className={stylesjust.just}>Just Build It.</h2>
                </>
              }
              para={
                <>
                  <h3 className={stylesjust.develop}>
                    Design, Develop, and Grow with BitsWits.
                  </h3>
                </>
              }
              slide="slide1lp"
            />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <NewFaqslp />
            <HomeLocationlp />
          </>
        )
      )}
      <Script id="websiteSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Top Mobile App Development Company",
            "url": "https://www.bitswits.co/top-mobile-app-development-company",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
           }                  
        `}
      </Script>
      <Script id="organizationSchema" type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BitsWits",
              "url": "https://www.bitswits.co/top-mobile-app-development-company",
              "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
              "sameAs": [
                "https://www.facebook.com/officialBitsWits",
                "https://twitter.com/BitsWits_/",
                "https://www.youtube.com/@officialBitsWits",
                "https://www.instagram.com/officialBitsWits/",
                "https://www.linkedin.com/company/officialBitsWits"
              ]
            }              
        `}
      </Script>
      <Script id="localBusinessSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.c29e3673.png&w=384&q=75",
            "url": "https://www.bitswits.co/top-mobile-app-development-company",
            "telephone": "+1 713 565 7656",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7370769,
              "longitude": -95.46221829999999
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "06:00"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://www.instagram.com/officialBitsWits/",
              "https://twitter.com/BitsWits_/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.youtube.com/@officialBitsWits"
            ] 
           }                                                                                                       
        `}
      </Script>
      <Script id="productSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": "Top Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.c29e3673.png&w=384&q=75",
            "description": "Our mobile app development services turn your innovative ideas into success stories by crafting apps that stand out in the market. While you focus on your business, Bitswits will handle the technical aspects of developing your app.",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1174"
            }
           }
        `}
      </Script>
    </>
  );
}
