"use client"
import Script from "next/script";
import React, { useEffect, useState } from "react";
//components
import ServicesBanner from "../../components/ServicesBanner";
import ServicesMaintain from "../../components/ServicesMaintain";
import Justbuildit from "../../components/Justbuildit";
import ServicesPortfolio from "../../components/ServicesPortfolio";
import Newsuccess from "../../components/NewMblSuccess";
import Technologieswe from "../../components/Technologieswe";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import Formnewlp from "../../components/Formnewlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/custommobiledevelopment/banner_image.png";
import app from "/public/images/customMblApp/app.png";
import android from "/public/images/customMblApp/android.png";
import ios from "/public/images/customMblApp/ios.png";
import cross from "/public/images/customMblApp/cross.png";
import mobile from "/public/images/customMblApp/mobile.png";
import legacy from "/public/images/customMblApp/legacy.png";

export default function CustomMobile() {
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
        subtitle: (<> Go Beyond Expectations With </>),
        title: (<> Custom Mobile Application </>),
        title1: (<> Development Services </>),
      },
      serdata: [
        {
          title: (<> App <br /> Design </>),
          text: "Create an exceptional app with an attractive design, intuitive interface, and convenient user experience.",
          appclass: "app",
          imgservice: app,
        },
        {
          title: (<> Android App <br /> Development </>),
          text: (<> Develop high-performing, scalable and native looking apps for Android devices with Kotlin and Java. </>),
          appclass: "app1",
          imgservice: android,
        },
        {
          title: (<> iOS App <br /> Development </>),
          text: "Make intuitive mobile apps with rich functionality for Apple mobile devices with Swift and Objective-C.",
          appclass: "app2",
          imgservice: ios,
        },
        {
          title: "Cross-Platform Mobile Development",
          text: "Build an app that runs across multiple platforms using the same codebase with Flutter or React Native.",
          appclass: "app3",
          imgservice: cross,
        },
        {
          title: (<> Mobile Server-Side <br /> Development </>),
          text: (<> Setup cloud or hardware infrastructure for app execution, components coordination, and API integrations. </>),
          appclass: "app4",
          imgservice: mobile,
        },
        {
          title: (<> Legacy Application <br /> Modernization </>),
          text: "Improve performance and throughput, upgrade UX/UI, and add new features to existing mobile apps.",
          appclass: "app5",
          imgservice: legacy,
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
        subtitle="BitsWits Is Your One-Stop Shop For"
        title={<> Custom Mobile Application Development for Businesses </>}
        text={
          <>

            BitsWits is your ultimate destination for custom mobile application
            development for businesses. We provide comprehensive solutions for
            companies seeking tailored mobile apps to boost their operations and
            customer engagement
          </>
        }
        BannerImage={BannerImage}
        assignClass="custom"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="customApp"
          subtitle={<> Go Beyond Expectations With </>}
          title={<> Custom Mobile Application </>}
          title1={<> Development Services </>}
          appContent={[]}
          appContent1={[
            {
              title: (<> App <br /> Design </>),
              text: "Create an exceptional app with an attractive design, intuitive interface, and convenient user experience.",
              appclass: "app",
            },
            {
              title: (<> Android App <br /> Development </>),
              text: (<> Develop high-performing, scalable and native looking apps for Android devices with Kotlin and Java. </>),
              appclass: "app1",
            },
            {
              title: (<> iOS App <br /> Development </>),
              text: "Make intuitive mobile apps with rich functionality for Apple mobile devices with Swift and Objective-C.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Cross-Platform Mobile Development",
              text: "Build an app that runs across multiple platforms using the same codebase with Flutter or React Native.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: (<> Mobile Server-Side <br /> Development </>),
              text: (<> Setup cloud or hardware infrastructure for app execution, components coordination, and API integrations. </>),
              appclass: "app4",
            },
            {
              title: (<> Legacy Application <br /> Modernization </>),
              text: "Improve performance and throughput, upgrade UX/UI, and add new features to existing mobile apps.",
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
        title="Explore Our Custom Mobile Development Journey"
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
        maintitle="Brace Yourself for What Happens Next"
        successSteps={[
          {
            number: "01",
            title: "Talk To Our Experts",
            text: "Contact us without obligation by email or phone and secure your free consultation.",
            buttonText: "Connect Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "02",
            title: "Get A Quote",
            text: "Get an exact cost breakdown structure of your app.",
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
            question: "What is a custom mobile application?",
            answer: (
              <>
                A custom mobile application is a software program developed
                specifically for a particular business or organization to meet
                its unique requirements. It is tailored to address specific
                needs and goals.
              </>
            ),
          },
          {
            question:
              "Why should a business consider developing a custom mobile app?",
            answer: (
              <>
                Custom apps can provide tailored solutions, streamline business
                processes, enhance user experience, and offer a competitive
                advantage. They can be designed to meet specific business goals
                and requirements.
              </>
            ),
          },
          {
            question:
              "How does custom app development differ from using off-the-shelf solutions?",
            answer: (
              <>
                Off-the-shelf solutions are pre-built applications designed for
                a wide audience, while custom apps are built from scratch to
                address specific business needs. Custom apps offer more
                flexibility and can be precisely tailored to the organization's
                requirements.
              </>
            ),
          },
          {
            question:
              "What technologies are commonly used in custom mobile app development?",
            answer: (
              <>
                The choice of technologies depends on the platform and specific
                requirements, but commonly used technologies include Swift and
                Objective-C for iOS, Java and Kotlin for Android, and frameworks
                like React Native, Flutter, or Xamarin for cross-platform
                development.
              </>
            ),
          },
          {
            question: "How long does it take to develop a custom mobile app?",
            answer: (
              <>
                The development time varies depending on the complexity of the
                app, features, and the development approach. Simple apps may
                take a few weeks, while more complex ones could take several
                months.
              </>
            ),
          },
          {
            question:
              "What is the typical cost of developing a custom mobile app?",
            answer: (
              <>
                The cost varies significantly based on factors such as features,
                complexity, platform(s), and development time. It's essential to
                discuss requirements with a development team to get an accurate
                estimate.
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
            "name": "Custom Mobile App Development Company",
            "url": "https://www.bitswits.co/custom-mobile-development",
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
            "url": "https://www.bitswits.co/custom-mobile-development",
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
            "name": "Custom Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_image.47c629c5.png&w=1080&q=75",
            "url": "https://www.bitswits.co/custom-mobile-development",
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
            "name": "Custom Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_image.47c629c5.png&w=1080&q=75",
            "description": "BitsWits is your ultimate destination for custom mobile application development for businesses. We provide comprehensive solutions for companies seeking tailored mobile apps to boost their operations and customer engagement",
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
