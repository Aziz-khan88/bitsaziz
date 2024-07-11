"use client"
import Script from "next/script";
import React, { useState, useEffect } from "react";
//components
import ServicesBanner from "../../components/ServicesBanner";
import ServicesMaintain from "../../components/ServicesMaintain";
import Justbuildit from "../../components/Justbuildit";
import ServicesPortfolio from "../../components/ServicesPortfolio";
import Newsuccess from "../../components/NewMblSuccess";
import Technologieswe from "../../components/Technologieswe";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Formnewlp from "../../components/Formnewlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/images/augmentapp/Augmentebanner.png";
import customios from "/public/images/augmentreality/2d3dandisometricgamesdevelopment.png";
import iphoneapp from "/public/images/augmentreality/interactive3dvisuallearningforeducationwithartechnology.png";
import applewatch from "/public/images/augmentreality/arpoweredtravelexperiencesforthemodernexplorer.png";
import appletvappdevelopment from "/public/images/augmentreality/designinsightandmanufacturingdigitalmodelswithar.png";
import iphoneappdesigning from "/public/images/augmentreality/3dvisualpresentationforproductlaunchthroughar.png";

export default function augmentedrealityappsdevelopment() {
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
  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        subtitle: "BitsWits Sets New Standards",
        title1: "Expert",
        title2: "Augmented Reality Development",
        title3: "at Your Service!",
      },
      serdata: [
        {
          title: <> 2D, 3D, And Isometric Games Development </>,
          text: "We make games super cool by integrating augmented reality elements into 2D, 3D, and Isometric games, creating captivating and dynamic visuals.",
          appclass: "app01",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              Interactive 3D Visual Learning for Education with AR Technology{" "}
            </>
          ),
          text: (
            <>
              {" "}
              Using AR, we create fun 3D experiences for learning. Our
              user-friendly designs and activities offer an engaging way to
              understand things better.{" "}
            </>
          ),
          appclass: "app02",
          imgservice: iphoneapp,
        },
        {
          title: <> AR powered Travel Experiences for the Modern Explorer </>,
          text: "We develop augmented reality solutions for the travel industry, integrating immersive navigation, virtual tours, interactive guides, and cultural experiences for enhanced travel exploration.",
          appclass: "app3",
          imgservice: applewatch,
        },
        {
          title: <> Design Insight and Manufacturing Digital Models With AR </>,
          text: (
            <>
              {" "}
              Our advanced AR solutions for manufacturing, facilitate precise
              design insights and digital model visualization to optimize
              efficiency and streamline production processes effectively.{" "}
            </>
          ),
          appclass: "app4",
          imgservice: appletvappdevelopment,
        },
        {
          title: <> 3D Visual Presentation for Product Launch Through AR </>,
          text: "Our AR solutions offer 3D visual presentations, allowing users to visualize products in real-world contexts and accurately measure space requirements.",
          appclass: "app5",
          imgservice: iphoneappdesigning,
        },
      ],
    },
  ];
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <ServicesBanner
        subtitle="Empower Your Business with"
        title={<> Top Augmented Reality App Development Company </>}
        text={
          <>
            {" "}
            BitsWits is your ultimate destination for Augmented Reality app
            development. Our developers deliver dynamic AR experiences that set
            your business apart from the rest.{" "}
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="augmented"
          subtitle={<> BitsWits Sets New Standards </>}
          title0={<> Expert </>}
          title={<> Augmented Reality Development </>}
          title1={<> at Your Service! </>}
          appContent={[
            {
              title: (
                <>
                  {" "}
                  2D, 3D, And Isometric <br /> Games Development{" "}
                </>
              ),
              text: "We make games super cool by integrating augmented reality elements into 2D, 3D, and Isometric games, creating captivating and dynamic visuals.",
              appclass: "app01",
            },
            {
              title: (
                <>
                  {" "}
                  Interactive 3D Visual Learning for <br /> Education with AR
                  Technology{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  Using AR, we create fun 3D experiences for learning. Our
                  user-friendly designs and activities offer an engaging way to
                  understand things better.{" "}
                </>
              ),
              appclass: "app02",
            },
          ]}
          appContent1={[]}
          appContent2={[
            {
              title: (
                <>
                  {" "}
                  AR powered Travel Experiences <br /> for the Modern Explorer{" "}
                </>
              ),
              text: "We develop augmented reality solutions for the travel industry, integrating immersive navigation, virtual tours, interactive guides, and cultural experiences for enhanced travel exploration.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: (
                <>
                  {" "}
                  Design Insight and Manufacturing <br /> Digital Models With AR{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  Our advanced AR solutions for manufacturing, facilitate
                  precise design insights and digital model visualization to
                  optimize efficiency and streamline production processes
                  effectively.{" "}
                </>
              ),
              appclass: "app4",
            },
            {
              title: (
                <>
                  {" "}
                  3D Visual Presentation for Product <br /> Launch Through AR{" "}
                </>
              ),
              text: "Our AR solutions offer 3D visual presentations, allowing users to visualize products in real-world contexts and accurately measure space requirements.",
              appclass: "app5",
            },
          ]}
          appContent4={[]}
          appContent5={[]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our Augmented Reality App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
              streamlined process for app development is <br /> designed to be
              transparent and collaborative, ensuring your vision comes to life
              exactly as you imagined."
      />
      <Justbuildit />
      <LpChoose transform="transform" />
      <ServicesPortfolio
        title={
          <>
            Showcasing Our <span className="newfycolr">
              Creative Vision
            </span>
          </>
        }
      />
      <Newsuccess
        assignClass="spacing"
        subtitle="Ready For Success?"
        maintitle={
          <>
            {" "}
            Accelerate Your Growth With <br /> Augmented Reality Apps{" "}
          </>
        }
        successSteps={[
          {
            number: "01",
            title: "Consult Our Specialists",
            text: "Reach out to our specialists without any hesitation via email or call to attain a free consultation.",
            buttonText: "Connect Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "02",
            title: (
              <>
                {" "}
                Request a <br /> Quote{" "}
              </>
            ),
            text: "Get a detailed cost breakdown for your app development project.",
            buttonText: "Chat Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "03",
            title: "Build An MVP",
            text: "Start your app development journey with no-obligation consultation via email and phone.",
            buttonText: "Call Now!",
            link: "tel:+8335006007",
          },
        ]}
      />
      <Technologieswe />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question:
              "What's the typical timeline for an AR project with BitsWits?",
            answer: (
              <>
                {" "}
                Project timeline varies but usually ranges from a few weeks to a
                few months.{" "}
              </>
            ),
          },
          {
            question:
              "Do you offer AR app development, and can it be integrated into existing apps?",
            answer: (
              <>
                {" "}
                Yes, we develop AR applications and can integrate them with
                existing ones.{" "}
              </>
            ),
          },
          {
            question:
              "What hardware or devices are required for end-users to access AR experiences developed by BitsWits?",
            answer: (
              <>
                {" "}
                Commonly used devices like smartphones or AR glasses can access
                our AR experiences.{" "}
              </>
            ),
          },
          {
            question:
              "Are there any hidden or additional costs that we should be aware of in the AR development process with BitsWits?",
            answer: (
              <>
                {" "}
                We maintain transparency in our pricing, and there are no hidden
                costs. Any additional expenses will be communicated and agreed
                upon in advance.{" "}
              </>
            ),
          },
          {
            question:
              "Does BitsWits provide 24/7 technical support for critical AR applications?",
            answer: (
              <>
                {" "}
                Yes, we offer 24/7 support for mission-critical applications.{" "}
              </>
            ),
          },
          {
            question:
              "Are there examples or case studies of successful AR projects you've completed?",
            answer: (
              <>
                {" "}
                Yes, we can provide case studies showcasing our work. Sign up
                now, and our customer support team will be in touch with you.{" "}
              </>
            ),
          },
        ]}
      />
      <HomeLocation />

      <Script id="websiteSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Augmented Reality Apps Development Company",
            "url": "https://www.bitswits.co/augmented-reality-apps-development-company",
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
            "url": "https://www.bitswits.co/augmented-reality-apps-development-company",
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
          "name": "Augmented Reality Apps Development Company",
          "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAugmentebanner.8f681373.png&w=750&q=75",
          "url": "https://www.bitswits.co/augmented-reality-apps-development-company",
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
            "name": "Augmented Reality Apps Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAugmentebanner.8f681373.png&w=750&q=75",
            "description": "BitsWits is your ultimate destination for Augmented Reality app development. Our developers deliver dynamic AR experiences that set your business apart from the rest.",
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
