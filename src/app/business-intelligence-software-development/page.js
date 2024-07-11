"use client"

import Image from "next/image";
import Script from "next/script";
import React, { useState, useEffect } from "react";
//components
import Banner from "../../components/new-bussiness-intelligence-page/BussinessIntelligenceBanner";
import Provideservices from "../../components/new-bussiness-intelligence-page/Provideservices";
import Globallplp6 from "../../components/Globallplp6";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import LpForm from "../../components/LpFormprops";
import CustomCards from "../../components/customCards";
import SmartTech from "../../components//new-bussiness-intelligence-page/SmartTech";
import Justbuildit from "../../components/Justbuildit";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import HomeBannerSlider from "../../components/HomeBannerSlider";
import Nothing from "../../components/Nothing";
import People from "../../components/People";
import BICards from "../../components/BICards";
//images
import BannerImage from "/public/bussinessintelligence/bussiness-intelligence.png";
import bestgloba11 from "/public/bussinessintelligence/bussinessicon1.png";
import bestgloba12 from "/public/bussinessintelligence/bussinessicon2.png";
import bestgloba13 from "/public/bussinessintelligence/bussinessicon3.png";
import user1 from "/public/bussinessintelligence/bussinessicon13.png";
import user2 from "/public/bussinessintelligence/bussinessicon14.png";
import user3 from "/public/bussinessintelligence/bussinessicon15.png";
import user4 from "/public/bussinessintelligence/bussinessicon16.png";
import user5 from "/public/bussinessintelligence/bussinessicon17.png";
import user6 from "/public/bussinessintelligence/bussinessicon18.png";
import user7 from "/public/bussinessintelligence/bussinessicon22.png";
import user8 from "/public/bussinessintelligence/bussinessicon23.png";
import user9 from "/public/bussinessintelligence/bussinessicon24.png";
import user10 from "/public/bussinessintelligence/bussinessicon25.png";
import user11 from "/public/bussinessintelligence/bussinessicon26.png";
import user12 from "/public/bussinessintelligence/bussinessicon27.png";
import chatbots1 from "/public/bussinessintelligence/bussinessicon10.png";
import chatbots2 from "/public/bussinessintelligence/bussinessicon11.png";
import chatbots3 from "/public/bussinessintelligence/bussinessicon12.png";
import chatbots4 from "/public/bussinessintelligence/bussinessicon19.png";
import chatbots5 from "/public/bussinessintelligence/bussinessicon20.png";
import chatbots6 from "/public/bussinessintelligence/bussinessicon21.png";
import web from "/public/bussinessintelligence/custom-cluod.png";
import customWeb from "/public/bussinessintelligence/custom.png";
import js1 from "/public/bussinessintelligence/custom1.png";
import js2 from "/public/bussinessintelligence/custom2.png";
import js3 from "/public/bussinessintelligence/custom3.png";
import js4 from "/public/bussinessintelligence/custom4.png";
import js5 from "/public/bussinessintelligence/custom5.png";
import js6 from "/public/bussinessintelligence/custom6.png";
import js7 from "/public/bussinessintelligence/custom7.png";
import js8 from "/public/bussinessintelligence/custom8.png";
import js9 from "/public/bussinessintelligence/custom9.png";

export default function mobileApplication() {
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
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Banner
        assignClass="bussiness"
        subtitle="Our Award-Winning"
        title={<> Business Intelligence Software Development </>}
        text={
          <>
            Taking Business To New Heights with Custom AI-Driven BI Software
            Solutions
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSlider />
      <LpForm
        addresClass="iosclass"
        heading={`As Business Intelligence (BI) developers push the boundaries of technology to automate crucial business decisions, enterprises neglecting investment risk falling behind their more modern competitors. We specialize in proficiently programming and implementing BI solutions for market forecasting, trend analysis, and operations optimization. `}
      />
      <Nothing Nothing="nothingLp6" />
      <Provideservices
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            Experienced and Dedicated BI Developers
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Hire Experienced and Dedicated BI Developers
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            As Business Intelligence (BI) developers continue to advance the
            technology's ability to automate mission-critical business <br />
            decisions, enterprises that fail to invest will find themselves
            unable to catch up to their more modern competitors. We expertly{" "}
            <br />
            program and implement BI solutions for market forecasting, trend
            analysis, and operations optimization.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Custom BI Development",
            para4:
              "As a BI developer, we provide comprehensive business intelligence development. We use Online Analytical Processing (OLAP) technology to facilitate multi-dimensional analyses of big data from multiple sources.",
          },
          {
            img1: bestgloba12,
            titl3: "BI Data Warehouse Development",
            para4:
              "We provide Business Intelligence (BI) data warehouse services, including the engineering of central repositories, to Extract, Transform and Load (ETL) data from disparate platforms and applications.",
          },
          {
            img1: bestgloba13,
            titl3: "On-Premise BI Software Development",
            para4:
              "We develop self-service and server-based dashboard software that can be easily deployed and installed into any on-premise network environment. Our BI solutions can be customized for any existing hardware.",
          },
        ]}
        video={
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/961554122/rendition/540p/file.mp4?loc=external&log_user=0&signature=7ad8927833282825ae5e439ab5add957efcdc3cf2a71d05d0c04047377c5c9c3"
            autoPlay="true"
            loop="true"
          ></video>
        }
      />
      <BICards
        flexRow="displayFlex"
        data={[
          {
            img2: user1,
            title: "BI Reporting & Dashboards",
            text: "As a BI report developer, we build robust and customizable dashboards with reporting and data analytics tools that provide real-time insights in a variety of pixel-perfect displays. Our dashboards and reporting tools have the ability to run on any browser or platform.",
          },
          {
            img2: user2,
            title: "Data Science & Machine Learning",
            text: "We engineer data science and machine learning tools to configure data and create predictive models with the ability to be shared and custom-scripted. Our machine learning models are able to be automatically trained based on data.",
          },
          {
            img2: user3,
            title: "Cloud BI Development",
            text: "We deploy cloud-based applications using container architecture for lightweight app development. We ensure industry compliance, governance, and security protocols are built into all of the business intelligence technologies we develop.",
          },
        ]}
      />
      <Provideservices
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowClass="newrowbussinessthree"
        particalAfter="partical"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">BI Cloud Solutions</h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Custom BI Cloud Solutions
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            Chetu’s engineers create custom business intelligence (BI) cloud app
            solutions that utilize AI-
            <br />
            powered software, IoT technologies, and/or big data storage to
            optimize core business operations.
            <br />
            can be analyzed in real-time.
          </p>
        }
        sec={[
          {
            img1: chatbots4,
            titl3: "AI Cloud Solutions",
            para4: (
              <>
                We leverage the power of custom AI solutions to create cloud
                machine learning platforms, launch intelligent chatbots,
                optimize external data storage, and so much more.
              </>
            ),
          },
          {
            img1: chatbots5,
            titl3: "Iot Cloud Solutions",
            para4: (
              <>
                We combine the power of IoT and the cloud to create robust,
                highly functional cloud IoT solutions that support connected
                applications, power industrial operations, and more.
              </>
            ),
          },
          {
            img1: chatbots6,
            titl3: "Big Data Cloud Solutions",
            para4: (
              <>
                We unlock the power of cloud computing to enhance big data
                storage processing & visualization, adjusting big data volume,
                velocity, and variety to meet business needs.
              </>
            ),
          },
        ]}
        video={<Image src={web} className="img-fluid" alt="bitswits" />}
      />
      <CustomCards
        assignClass="notSame"
        flexRow="displayFlex"
        subtitle="Blockchain Development Services"
        title={
          <>
            Custom BI Data Visualization & <br /> Reporting Solutions
          </>
        }
        desc={
          <>
            Our BI services create interactive and data-rich data visualization
            and reporting tools with a variety of custom displays such as <br />
            tables, charts, candlesticks, gauges, diagrams, maps, and more.
          </>
        }
        data={[
          {
            img2: user7,
            title: "Augmented Analytics",
            text: "Our developers augment your existing analytics software with AI and other tools to deliver broad and precise insights and instantly detect anomalies.",
          },
          {
            img2: user8,
            title: "Unified Business Insights",
            text: "Our developers help you connect KPI’s, dashboards, and reports in a secure and easy-to-use portal, creating a fuller scope of unified analytics.",
          },
          {
            img2: user9,
            title: "Security Compliance & Governance",
            text: "We implement SecureKey Authorization technology to provide enhanced security and the ability to govern accessibility permissions on a scalable level.",
          },
          {
            img2: user10,
            title: "Automated Business Processes",
            text: "We implement features that automate and standardize the development process to improve productivity, save time, and reduce costs.",
          },
          {
            img2: user11,
            title: "Embedded BI Analytics",
            text: "We create embedded analytics platforms to seamlessly integrate with any application or self-service portal using API & SAML authentication.",
          },
          {
            img2: user12,
            title: "Flexible Data Deployment",
            text: "Our consultant BI experts help you deploy data to an in-cloud, on-premise, or hybrid platform to meet your specific data deployment needs.",
          },
        ]}
      />
      <Provideservices
        assignClass="providebussiness"
        bottomPadding="bottomPaddingTwo"
        rowclas="newrowbussiness"
        particalAfter="partical"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            BI Software Features
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Custom BI Software Features
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            We customize your BI platform’s features to best fit your unique
            business needs while turning raw data into actionable insights that{" "}
            <br />
            can be analyzed in real-time.
          </p>
        }
        sec={[
          {
            img1: chatbots1,
            titl3: "Data Preparation & Integrations",
            para4: (
              <>
                We help you acquire data from diverse sources and streamline it
                into one secure <br /> hub with the ability to integrate with
                any existing infrastructure for optimized <br /> analysis.
              </>
            ),
          },
          {
            img1: chatbots2,
            titl3: "Mobile BI Applications",
            para4: (
              <>
                We build custom mobile apps designed to promote enhanced
                scalability, better
                <br /> connectivity & broadband coverage, unlimited data
                storage, and so much more.
              </>
            ),
          },
          {
            img1: chatbots3,
            titl3: "Real-Time Visual Data Analysis",
            para4: (
              <>
                We create custom interactive visual analytics dashboards for
                real-time data <br /> analysis and monitoring through graphs,
                tables, charts, and more on an easy-to-
                <br />
                use interface
              </>
            ),
          },
        ]}
        video={<Image src={customWeb} className="img-fluid" alt="bitswits" />}
      />
      <BICards
        flexRow="displayFlex"
        data={[
          {
            img2: user1,
            title: "Augmented Analytics",
            text: "Our developers augment your existing analytics software with AI and other tools to deliver broad and precise insights and instantly detect anomalies.",
          },
          {
            img2: user2,
            title: "Unified Business Insights",
            text: "Our developers help you connect KPI’s, dashboards, and reports in a secure and easy-to-use portal, creating a fuller scope of unified analytics.",
          },
          {
            img2: user3,
            title: "Security Compliance & Governance",
            text: "We implement SecureKey Authorization technology to provide enhanced security and the ability to govern accessibility permissions on a scalable level.",
          },
          {
            img2: user4,
            title: "Automated Business Processes",
            text: "We implement features that automate and standardize the development process to improve productivity, save time, and reduce costs.",
          },
          {
            img2: user5,
            title: "Embedded BI Analytics",
            text: "We create embedded analytics platforms to seamlessly integrate with any application or self-service portal using API & SAML authentication.",
          },
          {
            img2: user6,
            title: "Flexible Data Deployment",
            text: "Our consultant BI experts help you deploy data to an in-cloud, on-premise, or hybrid platform to meet your specific data deployment needs.",
          },
        ]}
      />
      <SmartTech
        assignClass="providecustom"
        title={
          <h3 className="font_30 fontsfheavy newfycolr center">
            BI Software Integrations{" "}
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white center">
            Custom BI Software Integrations
          </h2>
        }
        para={
          <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">
            Our custom BI software solutions are designed to import essential
            data from a wide variety of web/URL feeds and file formats,
            <br />
            including JSON, HTML, XML, CSV, XLS, XLSX, and many more. We
            seamlessly integrate third-party business intelligence (BI)
            analytics
            <br /> solutions with your current business processes to effectively
            streamline your workflows and gain full visibility over your
            business insights.
          </p>
        }
        sec1title=""
        sec={[
          {
            img1: js1,
            title3: "ZOHO Analyticst",
            para4:
              "Our developers integrate the ZOHO analytics platform with your current business systems to collect raw data and transform it into visually stunning and insightful reports and dashboards.",
          },
          {
            img1: js2,
            title3: "Oracle BI",
            para4:
              "Our talented developers seamlessly integrate with Oracle Business Intelligence solutions to help businesses effectively manage their business insights, streamline workflows, and gain full visibility into their metrics.",
          },
          {
            img1: js3,
            title3: "Logi Analytics",
            para4:
              "We integrate Logi Analytics Solutions with your existing business systems to help cut down on maintenance and deployment costs while allowing you to utilize a fully documented embedded analytics platform.",
          },
          {
            img1: js4,
            title3: "SAP Business Objects",
            para4: `Chetu can improve business efficiency by integrating any third-party software with SAP BusinessObjects, put in place to elevate your business processes/workflows for real-time reporting and increased ROI.
          `,
          },
          {
            img1: js5,
            title3: "Looker",
            para4:
              "We can integrate Looker with any application and business system in your organization’s infrastructure, enabling users to explore, analyze, and share real-time, insightful business analytics with ease..",
          },
          {
            img1: js6,
            title3: "DOMO",
            para4: `
            By integrating DOMO with your current business applications, you can pull Excel spreadsheets, files attached to emails, files from FTP, flat files, and more into a single, cloud-based platform.`,
          },
          {
            img1: js7,
            title3: "BIRT",
            para4: `Our company specializes in customized BIRT application development, empowering you with full visibility into metrics and informed decision-making. Seamlessly integrate BIRT software into your systems, transforming raw data into visually appealing reports and dashboards.
          `,
          },
          {
            img1: js8,
            title3: "Power BI",
            para4:
              "Leverage Power BI for data analysis. Seamlessly integrate with processes, unlocking insights. Our custom development delivers real-time analytics. Understand data, optimize decisions, drive growth with our Power BI developers.",
          },
          {
            img1: js9,
            title3: "Tableau",
            para4: `
            Unlock your data's potential with our seamless Tableau dashboard development. Our Tableau developer services transform raw data into stunning dashboards for actionable insights. Stay ahead in today's business landscape by easily exploring real-time data and making data-driven decisions confidently.`,
          },
        ]}
        sec2title=""
        sec2={[]}
      />
      <Justbuildit assignClass="justforpop" />
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
            "name": "Business Intelligence Software Development",
            "url": "https://www.bitswits.co/business-intelligence-software-development",
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
            "url": "https://www.bitswits.co/business-intelligence-software-development",
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
            "name": "Business Intelligence Software Development",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbussiness-intelligence.3ae5ec13.png&w=3840&q=75",
            "url": "https://www.bitswits.co/business-intelligence-software-development",
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
            "name": "Business Intelligence Software Development",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbussiness-intelligence.3ae5ec13.png&w=3840&q=75",
            "description": "As Business Intelligence (BI) developers push the boundaries of technology to automate crucial business decisions, enterprises neglecting investment risk falling behind their more modern competitors. We specialize in proficiently programming and implementing BI solutions for market forecasting, trend analysis, and operations optimization.",
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
