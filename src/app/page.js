"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// CSS
import styles from "../../styles/new-home-page-fy.module.css"
// Components 
import NewIndexBanner from "../components/new-home-page-fy/NewIndexBanner.js";
import NewHomeWho from "../components/new-home-page-fy/NewHomeWho.js";
import NewHomeWhat from "../components/new-home-page-fy/NewHomeWhat.js";
import Industry from "../components/new-home-page-fy/Industry.js";
import WeworkLphome from "../components/new-home-page-fy/WeworkLphome.js";
import StartupsLp6 from "../components/new-home-page-fy/StartupsLp6.js";
import Technologieswe from "../components/new-home-page-fy/Technologieswe.js";
import Nothing from "../components/Nothing";
import NewMaintain from "../components/new-home-page-fy/NewMaintain.js";
import ServicesMaintainmobile from "../components/new-home-page-fy/ServicesMaintainmobile.js";
import Globallplp6 from "../components/new-home-page-fy/Globallplp6.js";
import LpChoose from "../components/new-home-page-fy/LpChoose.js";
import Formnewlp from "../components/new-home-page-fy/Formnewlp.js";
import Faqs from "../components/new-home-page-fy/NewhomeFaqs.js";
import HomeLocation from "../components/HomeLocation"
//Images
import customios from "/public/newHomePage/images/mobileimages/newMaintain1.png";
import iphoneapp from "/public/newHomePage/images/mobileimages/newMaintain2.png";
import applewatch from "/public/newHomePage/images/mobileimages/newMaintain3.png";
import appletvappdevelopment from "/public/newHomePage/images/mobileimages/newMaintain4.png";
import iphoneappdesigning from "/public/newHomePage/images/mobileimages/newMaintain5.png";
import hybridiphone from "/public/newHomePage/images/mobileimages/newMaintain6.png";
import appSeven from "/public/newHomePage/images/mobileimages/newMaintain7.png";
import appEight from "/public/newHomePage/images/mobileimages/newMaintain8.png";

export default function Home() {
  // ===================================
  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // ===================================
  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // ===================================
  const severcedata = [
    {
      classlayout: {
        newclass: "homeclass",
      },
      heading: {
        title2: "Services",
        text: (
          <>
            Maintaining digital quality with our collection of customizable
            services
          </>
        ),
      },
      serdata: [
        {
          title: "Mobile App Development",
          text: "We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              Game <br /> Development{" "}
            </>
          ),
          text: "Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Blockchain Development",
          text: "We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Artificial Intelligence (Ai)",
          text: "Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Web App Development",
          text: " Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "UI/UX App Design",
          text: "Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "AR/VR",
          text: "BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.",
          appclass: "app6",
          imgservice: appSeven,
        },
        {
          title: "Internet of Things",
          text: "We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.",
          appclass: "app7",
          imgservice: appEight,
        },
      ],
    },
  ];
  // ===================================
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <NewIndexBanner />
      {/* AwardsFold Start */}
      <section>
        <div className={`${styles.awardsFold}`}>
          <div className="container-fluid px-0">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-12 col-sm-12">
                <p
                  className={`font-bold fontawards25 mb-0 ${styles.textWhite}`}
                >
                  Endorsements on different Platforms
                </p>
                <h2
                  className={`fontawards font-bold mb-3 mb-lg-0 ${styles.textPink}`}
                >
                  Awards & <br />
                  Recognition
                </h2>
              </div>
              {isSliderActive ? (
                <div className={`${styles.appdev} col-7`}>
                  <div className="row">
                    <div className={`${styles.mobileapps} col-3`}>
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/1n.png"
                          alt="bitswits"
                          width={166}
                          height={129}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Developers
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/2n.png"
                          alt="bitswits"
                          width={120}
                          height={130}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Developers 2022
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/3n.png"
                          alt="bitswits"
                          width={148}
                          height={130}
                        />
                        <p className="white center pt-4 font16">
                          Top Application <br />
                          Development Company
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/4n.png"
                          alt="bitswits"
                          width={130}
                          height={129}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Development Company
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Slider
                  {...awardslogo}
                  className={` ${styles.startup1}  startposition mt-4`}
                >
                  <div className={`${styles.mobileapps} col-3`}>
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/1n.png"
                        alt="awards"
                        width={166}
                        height={129}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Developers
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/2n.png"
                        alt="awards"
                        width={120}
                        height={130}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Developers 2022
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/3n.png"
                        alt="awards"
                        width={148}
                        height={130}
                      />
                      <p className="white center pt-4 font16">
                        Top Application <br />
                        Development Company
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/4n.png"
                        alt="awards"
                        width={130}
                        height={129}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Development Company
                      </p>
                    </div>
                  </div>
                </Slider>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* AwardsFold End */}
      <NewHomeWho />
      <NewHomeWhat />
      <Industry industry="industryclass" />
      <WeworkLphome wework="weworkLpnewhomefy" />
      <StartupsLp6 startups="startupshome" />
      <Technologieswe />
      <Nothing Nothing="nothingLphomefy" />
      {isSliderActive ? (
        <NewMaintain
          title1={<> Delivering Excellence Daily </>}
          title2={<> Trusted Development Company For Tech Solutions </>}
          text={
            <>
              We, at BitsWits, are dedicated to being innovative and making our
              clients happy.
              <br />
              We specialize in customizing services for digital business
              evolution and bring the following services to the table…
            </>
          }
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <Globallplp6 />
      <LpChoose transform="transform" />
      <Formnewlp />
      <Faqs />
      <HomeLocation />

      <Script id="websiteSchema" type="application/ld+json">
        {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "App Development Company",
                        "url": "https://www.bitswits.co",
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
                        "url": "https://www.bitswits.co",
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
        {
          `
            {
              "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "App Development Company",
                "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
                "url": "https://www.bitswits.co ",
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
          `
        }
      </Script>
      <Script id="productSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "App Development Company",
              "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
              "description": "As a top-rated mobile app development company, Bitswits excels in transforming ideas into engaging, high-performance apps. Trust us to deliver solutions that combine innovation with a seamless user experience, propelling your business to new heights",
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