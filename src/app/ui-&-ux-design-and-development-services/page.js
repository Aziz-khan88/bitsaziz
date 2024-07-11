"use client"
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Image from "next/image";
//components
import ServicesBanner from "../../components/uiuxdesigndevelopment/UIUXBanner";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import Smarteruiux from "../../components/uiuxdesigndevelopment/Smarteruiux";
import Provideuiux from "../../components/uiuxdesigndevelopment/Provideuiux";
import ProjectProcess from "../../components/ProjectProcessLp6";
import Justbuildit from "../../components/Justbuildit";
import UIUXTechnology from "../../components/uiuxdesigndevelopment/UIUXTechnologies";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Globallplp6 from "../../components/Globallplp6";
import Formnewlp from "../../components/Formnewlp";
import Partnerships from "../../components/Partnerships";
//images
import BannerImage from "/public/ui-ux-page/banner-img.png";
import banImg1 from "/public/servnew/customweb/imgfold.png";
import bestgloba11 from "/public/ui-ux-page/icon1.png";
import bestgloba12 from "/public/ui-ux-page/icon2.png";
import bestgloba13 from "/public/ui-ux-page/icon3.png";
import bestgloba14 from "/public/ui-ux-page/icon4.png";
import bestgloba15 from "/public/ui-ux-page/icon5.png";
import bestgloba16 from "/public/ui-ux-page/icon6.png";
import poe from "/public/ui-ux-page/work1.png";
import poe2 from "/public/ui-ux-page/work2.png";

export default function UiUxDesign() {
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
        assignClass="UIUX"
        subtitle="Our Award-Winning"
        title={<> UI & UX Design And Development Services </>}
        text={
          <>
            {" "}
            Empowering Businesses with Tailored UI/UX Solutions By Our Design
            Experts{" "}
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      <Smarteruiux
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            Design Services For Smarter User Navigation
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Dynamic User Design Services <br /> For Smarter User Navigation
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            The key to developing a successful app is marrying the functionality
            your users demand with an intuitive design <br /> and experience
            that make it as simple as possible to use. Chetu’s UI/UX experts
            will design the perfect web,
            <br /> desktop, or mobile app to meet your specific business
            requirements, industry needs, and product development
            <br /> goals. We design and develop innovative digital user
            experiences that solve complex business problems.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Information Architecture Design",
            para4:
              "Our developers use industry-leading tools to construct new content management lifecycles, content models, and robust Document Information Typing Architecture (DITA) all while streamlining organic processes for conversion rate optimization (CRO).",
          },
          {
            img1: bestgloba12,
            titl3: "User Experience (UX) Development",
            para4:
              "We construct highly responsive Graphical User Interfaces (GUI) that include elements like 2D/3D animations and embedded media, providing an organic, unified user experience throughout our custom solutions. ",
          },
          {
            img1: bestgloba13,
            titl3: "User Interface (UI) Development",
            para4:
              "Our UI/UX designers are experts in graphic libraries, including OpenGL and WebGL. We collaborate with your stakeholders and IT team to develop a style (including color palettes, logo designs and layouts) that harmonizes with your company culture.",
          },
        ]}
        video={<Image src={poe} className="img-fluid" alt="bitswits" />}
      />
      <Provideuiux
        assignClass="provideuiux"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        sec={[
          {
            img1: bestgloba14,
            titl3: "Web & Mobile App UI/UX Development",
            para4:
              "We utilize frameworks like Xamarin, DevExpress, Ionic, Appcelerator, and Apache Cordova to deliver highly responsive UI/UX designs that fully leverage touchscreen functionality and provide mobile-first user experiences for progressive web apps.",
          },
          {
            img1: bestgloba15,
            titl3: "Front-End Programming",
            para4:
              "Our front-end development specialists are experts in key front-end languages (HTML5, CSS, JavaScript) and frameworks like jQuery, AngularJS, Node.js and Bootstrap. We ensure our tightly written code is optimized to work on multiple device types and browsers.",
          },
          {
            img1: bestgloba16,
            titl3: "Intuitive & Interactive Solutions",
            para4:
              "We use well-known UI guidelines like Human Interface Guidelines (HIG) and Material Design to develop intuitive solutions with goal-driven, usable designs that influence positive user responses and facilitate simple communication between a user and the interface.",
          },
        ]}
        video={<Image src={poe2} className="img-fluid" alt="bitswits" />}
      />
      <ProjectProcess
        processclass="processLp6"
        subtitle="Web Development Process"
        title="Our Strategic Web Development Process"
        desc={`We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom <br/> Websites & Applications.`}
        img5={
          <>
            {" "}
            <Image
              src={banImg1}
              alt="BitsWits"
              className="img-fluid mt-4 mt-lg-5"
            />{" "}
          </>
        }
      />
      <Justbuildit assignClass="justforpop" />
      <UIUXTechnology addresClass="tech" />
      <Globallplp6 bannerClass="newclassglobe" />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question: "What is Mobile Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Does Bitswits Offers Hybrid and Native Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Why Choose Bitswits as a Mobile Application Development Company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "Is there any customer support available?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "How to choose a mobile application development company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater do?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
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
            "name": "UI & UX Design And Development Services",
            "url": "https://www.bitswits.co/ui-&-ux-design-and-development-services",
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
            "url": "https://www.bitswits.co/ui-&-ux-design-and-development-services",
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
            "name": "UI & UX Design And Development Services",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-img.bdfaeb91.png&w=640&q=75",
            "url": "https://www.bitswits.co/ui-&-ux-design-and-development-services",
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
            "name": "UI & UX Design And Development Services",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-img.bdfaeb91.png&w=640&q=75",
            "description": "The key to developing a successful app is marrying the functionality your users demand with an intuitive design and experience that make it as simple as possible to use. Chetu’s UI/UX experts will design the perfect web, desktop, or mobile app to meet your specific business requirements, industry needs, and product development goals. We design and develop innovative digital user experiences that solve complex business problems.",
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
