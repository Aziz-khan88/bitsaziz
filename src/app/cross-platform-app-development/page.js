"use client"
import Script from "next/script";
import React, { useState, useEffect } from "react";
// css //
import styles from "@/styles/LpChoose.module.css";
//components
import ServicesBanner from "../../components/ServicesBanner";
import Partnercross from "../../components/Partnercross";
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
import customios from "/public/images/crossappdevelopement/customcrossplatformdevelopment.png";
import iphoneapp from "/public/images/crossappdevelopement/wearablecrossplatformapps.png";
import applewatch from "/public/images/crossappdevelopement/crossplatformuiuxdesignservices.png";
import appletvappdevelopment from "/public/images/crossappdevelopement/webbasedcrossplatformapps.png";
import iphoneappdesigning from "/public/images/crossappdevelopement/aiintegratedcrossplatformapps.png";
import hybridiphone from "/public/images/crossappdevelopement/crossplatformappsconsulting.png";
import AppsLived from "@/src/components/NewMobileApp/AppsLived/AppsLived";
import HomeCaseStudies from "@/src/components/HomeCaseStudies";
import HomeIndustries from "@/src/components/HomeIndustries";

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
        title2: "Cross-Platform App Development",
        title3: "One Codebase, Multiple Platforms, Infinite Possibilities",
      },
      serdata: [
        {
          title: "Custom Cross-Platform Development",
          text: "Premier provider of custom multi-platform app development services, BitsWits employs the latest technologies, including web services, databases, user experience design, development frameworks, and testing tools, to ensure that your app is optimized for all devices, from iPhones to Android phones.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              Wearable Cross-Platform <br /> Apps{" "}
            </>
          ),
          text: (
            <>
              {" "}
              Our team specializes in developing state-of-the-art wearable apps
              that seamlessly integrate with cameras and sensors across various
              platforms. Let us enhance your user experience with our expertise.{" "}
            </>
          ),
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: <> Cross-Platform UI/UX Design Services </>,
          text: "Our cross-platform UI/UX design services provide a seamless user experience across all devices & operating systems. Our experts deliver visually stunning & user-friendly interfaces that keep users engaged & satisfied.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Web-Based Cross-Platform Apps",
          text: "We provide a variety of options for cross-platform web app development, from cross-platform games to enterprise-level software solutions. Our cross-platform app development products are designed to be secure, user-friendly & highly adaptive.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: <> AI Integrated Cross Platform Apps </>,
          text: (
            <>
              {" "}
              BitsWits specializes in creating custom applications that utilize
              the power of artificial intelligence. Our AI-integrated
              cross-platform application development services offer innovative
              and intuitive solutions that leverage the latest AI technologies
              to automate tasks, streamline processes, and reduce costs for your
              business.{" "}
            </>
          ),
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: <> Cross Platform Apps Consulting </>,
          text: "Our team of cross-platform app developers actively listen to your ideas and craft custom plans to precisely meet your unique requirements. We highly value every project and strive to provide exceptional services that exceed your expectations.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
      ],
    },
  ];

  return (
    <>
      <ServicesBanner
        subtitle="Create The Future With Our"
        title={<> Cross-Platform App Development Services </>}
        text={
          <>
            {" "}
            With our cross-platform app development services, you can easily
            create apps that are compatible across multiple platforms. No more
            worrying about developing an app for every operating system; now you
            can develop and deploy one single app for both Android and iOS!{" "}
          </>
        }
        video={<video autoPlay muted src='https://player.vimeo.com/progressive_redirect/playback/961556561/rendition/360p/file.mp4?loc=external&log_user=0&signature=a745b879770d1a0683cd908adfa55351c023526978cc6f405fa87404be718539' className="w-75" ></video>}
      />
      <People People="people" />
      {isMobile ? (
        showMobileComponents && (
          <>
            <HomeBannerSliderlp />
            <LpForm addresClass="iosclass" />
            <Nothing Nothing="nothingLp6" />
            <Partnercross />
            {isSliderActive ? (
              <ServicesMaintain
                assignClass="cross"
                title={<> Cross-Platform App Development </>}
                title1={
                  <> One Codebase, Multiple Platforms, Infinite Possibilities </>
                }
                appContent={[]}
                appContent1={[
                  {
                    title: "Custom Cross-Platform Development",
                    text: "Premier provider of custom multi-platform app development services, BitsWits employs the latest technologies, including web services, databases, user experience design, development frameworks, and testing tools, to ensure that your app is optimized for all devices, from iPhones to Android phones.",
                    appclass: "app",
                  },
                  {
                    title: (
                      <>
                        {" "}
                        Wearable Cross-Platform <br /> Apps{" "}
                      </>
                    ),
                    text: (
                      <>
                        {" "}
                        Our team specializes in developing state-of-the-art wearable
                        apps that seamlessly integrate with cameras and sensors across
                        various platforms. Let us enhance your user experience with
                        our expertise.{" "}
                      </>
                    ),
                    appclass: "app1",
                  },
                  {
                    title: <> Cross-Platform UI/UX Design Services </>,
                    text: "Our cross-platform UI/UX design services provide a seamless user experience across all devices & operating systems. Our experts deliver visually stunning & user-friendly interfaces that keep users engaged & satisfied.",
                    appclass: "app2",
                  },
                ]}
                appContent2={[
                  {
                    title: "Web-Based Cross-Platform Apps",
                    text: "We provide a variety of options for cross-platform web app development, from cross-platform games to enterprise-level software solutions. Our cross-platform app development products are designed to be secure, user-friendly & highly adaptive.",
                    appclass: "app3",
                  },
                ]}
                appContent3={[
                  {
                    title: <> AI Integrated Cross Platform Apps </>,
                    text: (
                      <>
                        {" "}
                        BitsWits specializes in creating custom applications that
                        utilize the power of artificial intelligence. Our
                        AI-integrated cross-platform application development services
                        offer innovative and intuitive solutions that leverage the
                        latest AI technologies to automate tasks, streamline
                        processes, and reduce costs for your business.{" "}
                      </>
                    ),
                    appclass: "app4",
                  },
                  {
                    title: <> Cross Platform Apps Consulting </>,
                    text: "Our team of cross-platform app developers actively listen to your ideas and craft custom plans to precisely meet your unique requirements. We highly value every project and strive to provide exceptional services that exceed your expectations.",
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
            <HomeCaseStudies />
            <WeworkLp wework="weworkLpnewhomefy" />
            <StartupsLp startups="startups" />
            <ProjectProcess
              processclass="processLp6"
              title="Explore Our Cross-Platform App Development Journey"
              desc="We believe in efficiency without compromising quality. Our
                  streamlined process for app development is <br /> designed to be
                  transparent and collaborative, ensuring your vision comes to life
                  exactly as you imagined."
            />
            <Justbuildit />
            <LpChoose transform="transform" marginTop={styles.marginTop} />
            <HomeIndustries />
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
            <Technologieswe addresClass="appdev" />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <ServicesFaqs
              faqsData={[
                {
                  question: "Which apps use cross-platform?",
                  answer: (
                    <>
                      {" "}
                      Cross-platform apps are applications that can run on multiple
                      operating systems, such as iOS and Android. Popular examples of
                      cross-platform apps include social media networks like Twitter,
                      Facebook, and Instagram; messaging services like WhatsApp,
                      iMessage, and Skype; cloud storage solutions like Dropbox,
                      Google Drive, and iCloud; productivity tools like Evernote,
                      Slack, and Trello; and gaming services like Apple Arcade, Google
                      Play Games and Xbox Live. These apps have become essential for
                      staying connected across multiple devices and platforms.
                      Ultimately, the list of cross-platform apps is as long as your
                      imagination allows – chances are that there's an app for
                      whatever you need. Whether it's a powerful productivity tool, a
                      fun gaming experience, or the latest social media craze, chances
                      are there's a cross-platform app that can help you stay
                      connected and productive. And since it works on multiple
                      platforms, you don't have to worry about compatibility issues.
                      It's really that simple!{" "}
                    </>
                  ),
                },
                {
                  question: "What is cross-platform in app development?",
                  answer: (
                    <>
                      {" "}
                      “Cross-platform app development is the process of creating a
                      single application that can run on multiple operating systems,
                      such as iOS and Android.” This allows developers to create one
                      version of their app for all users, rather than having to write
                      code specifically for each platform. By utilizing cross-platform
                      tools and frameworks, it makes it easier for companies to bring
                      their apps to market faster and with fewer resources. It also
                      provides the cross platform mobile app design and development
                      agency with the opportunity to create a unified experience
                      across all devices, regardless of platform.{" "}
                    </>
                  ),
                },
                {
                  question: "What language is used for cross-platform apps?",
                  answer: (
                    <>
                      {" "}
                      The language used for cross-platform apps is usually a
                      combination of HTML, CSS, and JavaScript. However, there are
                      various frameworks available such as React Native, Flutter,
                      Ionic, and Xamarin that allow developers to create apps for
                      multiple platforms using the same codebase. Additionally, some
                      languages like Dart are designed with the intent to create
                      cross-platform apps. Ultimately, the language used for
                      cross-platform apps depends on the platform and tools chosen by
                      the developer. BitsWits masters the art of flutter cross
                      platform development.{" "}
                    </>
                  ),
                },
                {
                  question: "Is cross-platform development in demand?",
                  answer: (
                    <>
                      {" "}
                      Yes, cross-platform app development services will still be in
                      demand in 2023. As the need for efficient and cost-effective
                      software grows, companies are increasingly turning to
                      cross-platform development solutions to reduce development costs
                      and time while delivering a unified user experience across all
                      devices. In addition, cross-platform development is becoming
                      increasingly popular due to the growing trend toward mobile
                      applications that require code that can be shared across
                      multiple devices. With its cost savings, flexibility, and
                      scalability, cross-platform development is sure to remain in
                      demand for years to come.{" "}
                    </>
                  ),
                },
                {
                  question: "What is the best custom mobile app development company?",
                  answer: (
                    <>
                      {" "}
                      The best custom mobile app development company is the one that
                      meets your specific requirements and budget. They should have a
                      proven track record of successful projects and provide top-notch
                      customer support. Look for an experienced cross platform mobile
                      app developer that can effectively take your concept from idea
                      to market quickly and efficiently. Finally, make sure they are
                      up-to-date on the latest technologies and trends in mobile app
                      development to bring your project to life. If you find a company
                      that meets these criteria, then you are likely to have the best
                      custom mobile app development experience. And if you are looking
                      for such a company, BitsWits is the perfect destination to hire
                      cross platform app developers. Because we take pride in
                      possessing all those attributes mentioned above.{" "}
                    </>
                  ),
                },
                {
                  question:
                    "Which framework can be used to develop cross-platform applications?",
                  answer: (
                    <>
                      {" "}
                      The best framework to use for cross-platform app development
                      services is React Native. It allows the cross platform mobile
                      app development agency to create apps that can run on multiple
                      platforms with the same codebase, making it a great choice for
                      anyone looking to develop an app across multiple devices. React
                      Native also offers a wide range of features and capabilities,
                      making it one of the most popular frameworks available today.{" "}
                    </>
                  ),
                },
              ]}
            />
            <HomeLocation />
          </>
        )
      ) : (
        showDesktopComponents && (
          <>
            <HomeBannerSliderlp />
            <LpForm addresClass="iosclass" />
            <Nothing Nothing="nothingLp6" />
            <Partnercross />
            {isSliderActive ? (
              <ServicesMaintain
                assignClass="cross"
                title={<> Cross-Platform App Development </>}
                title1={
                  <> One Codebase, Multiple Platforms, Infinite Possibilities </>
                }
                appContent={[]}
                appContent1={[
                  {
                    title: "Custom Cross-Platform Development",
                    text: "Premier provider of custom multi-platform app development services, BitsWits employs the latest technologies, including web services, databases, user experience design, development frameworks, and testing tools, to ensure that your app is optimized for all devices, from iPhones to Android phones.",
                    appclass: "app",
                  },
                  {
                    title: (
                      <>
                        {" "}
                        Wearable Cross-Platform <br /> Apps{" "}
                      </>
                    ),
                    text: (
                      <>
                        {" "}
                        Our team specializes in developing state-of-the-art wearable
                        apps that seamlessly integrate with cameras and sensors across
                        various platforms. Let us enhance your user experience with
                        our expertise.{" "}
                      </>
                    ),
                    appclass: "app1",
                  },
                  {
                    title: <> Cross-Platform UI/UX Design Services </>,
                    text: "Our cross-platform UI/UX design services provide a seamless user experience across all devices & operating systems. Our experts deliver visually stunning & user-friendly interfaces that keep users engaged & satisfied.",
                    appclass: "app2",
                  },
                ]}
                appContent2={[
                  {
                    title: "Web-Based Cross-Platform Apps",
                    text: "We provide a variety of options for cross-platform web app development, from cross-platform games to enterprise-level software solutions. Our cross-platform app development products are designed to be secure, user-friendly & highly adaptive.",
                    appclass: "app3",
                  },
                ]}
                appContent3={[
                  {
                    title: <> AI Integrated Cross Platform Apps </>,
                    text: (
                      <>
                        {" "}
                        BitsWits specializes in creating custom applications that
                        utilize the power of artificial intelligence. Our
                        AI-integrated cross-platform application development services
                        offer innovative and intuitive solutions that leverage the
                        latest AI technologies to automate tasks, streamline
                        processes, and reduce costs for your business.{" "}
                      </>
                    ),
                    appclass: "app4",
                  },
                  {
                    title: <> Cross Platform Apps Consulting </>,
                    text: "Our team of cross-platform app developers actively listen to your ideas and craft custom plans to precisely meet your unique requirements. We highly value every project and strive to provide exceptional services that exceed your expectations.",
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
            <HomeCaseStudies />
            <WeworkLp wework="weworkLpnewhomefy" />
            <StartupsLp startups="startups" />
            <ProjectProcess
              processclass="processLp6"
              title="Explore Our Cross-Platform App Development Journey"
              desc="We believe in efficiency without compromising quality. Our
                streamlined process for app development is <br /> designed to be
                transparent and collaborative, ensuring your vision comes to life
                exactly as you imagined."
            />
            <Justbuildit />
            <LpChoose transform="transform" marginTop={styles.marginTop} />
            <HomeIndustries />
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
            <Technologieswe addresClass="appdev" />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <ServicesFaqs
              faqsData={[
                {
                  question: "Which apps use cross-platform?",
                  answer: (
                    <>
                      {" "}
                      Cross-platform apps are applications that can run on multiple
                      operating systems, such as iOS and Android. Popular examples of
                      cross-platform apps include social media networks like Twitter,
                      Facebook, and Instagram; messaging services like WhatsApp,
                      iMessage, and Skype; cloud storage solutions like Dropbox,
                      Google Drive, and iCloud; productivity tools like Evernote,
                      Slack, and Trello; and gaming services like Apple Arcade, Google
                      Play Games and Xbox Live. These apps have become essential for
                      staying connected across multiple devices and platforms.
                      Ultimately, the list of cross-platform apps is as long as your
                      imagination allows – chances are that there's an app for
                      whatever you need. Whether it's a powerful productivity tool, a
                      fun gaming experience, or the latest social media craze, chances
                      are there's a cross-platform app that can help you stay
                      connected and productive. And since it works on multiple
                      platforms, you don't have to worry about compatibility issues.
                      It's really that simple!{" "}
                    </>
                  ),
                },
                {
                  question: "What is cross-platform in app development?",
                  answer: (
                    <>
                      {" "}
                      “Cross-platform app development is the process of creating a
                      single application that can run on multiple operating systems,
                      such as iOS and Android.” This allows developers to create one
                      version of their app for all users, rather than having to write
                      code specifically for each platform. By utilizing cross-platform
                      tools and frameworks, it makes it easier for companies to bring
                      their apps to market faster and with fewer resources. It also
                      provides the cross platform mobile app design and development
                      agency with the opportunity to create a unified experience
                      across all devices, regardless of platform.{" "}
                    </>
                  ),
                },
                {
                  question: "What language is used for cross-platform apps?",
                  answer: (
                    <>
                      {" "}
                      The language used for cross-platform apps is usually a
                      combination of HTML, CSS, and JavaScript. However, there are
                      various frameworks available such as React Native, Flutter,
                      Ionic, and Xamarin that allow developers to create apps for
                      multiple platforms using the same codebase. Additionally, some
                      languages like Dart are designed with the intent to create
                      cross-platform apps. Ultimately, the language used for
                      cross-platform apps depends on the platform and tools chosen by
                      the developer. BitsWits masters the art of flutter cross
                      platform development.{" "}
                    </>
                  ),
                },
                {
                  question: "Is cross-platform development in demand?",
                  answer: (
                    <>
                      {" "}
                      Yes, cross-platform app development services will still be in
                      demand in 2023. As the need for efficient and cost-effective
                      software grows, companies are increasingly turning to
                      cross-platform development solutions to reduce development costs
                      and time while delivering a unified user experience across all
                      devices. In addition, cross-platform development is becoming
                      increasingly popular due to the growing trend toward mobile
                      applications that require code that can be shared across
                      multiple devices. With its cost savings, flexibility, and
                      scalability, cross-platform development is sure to remain in
                      demand for years to come.{" "}
                    </>
                  ),
                },
                {
                  question: "What is the best custom mobile app development company?",
                  answer: (
                    <>
                      {" "}
                      The best custom mobile app development company is the one that
                      meets your specific requirements and budget. They should have a
                      proven track record of successful projects and provide top-notch
                      customer support. Look for an experienced cross platform mobile
                      app developer that can effectively take your concept from idea
                      to market quickly and efficiently. Finally, make sure they are
                      up-to-date on the latest technologies and trends in mobile app
                      development to bring your project to life. If you find a company
                      that meets these criteria, then you are likely to have the best
                      custom mobile app development experience. And if you are looking
                      for such a company, BitsWits is the perfect destination to hire
                      cross platform app developers. Because we take pride in
                      possessing all those attributes mentioned above.{" "}
                    </>
                  ),
                },
                {
                  question:
                    "Which framework can be used to develop cross-platform applications?",
                  answer: (
                    <>
                      {" "}
                      The best framework to use for cross-platform app development
                      services is React Native. It allows the cross platform mobile
                      app development agency to create apps that can run on multiple
                      platforms with the same codebase, making it a great choice for
                      anyone looking to develop an app across multiple devices. React
                      Native also offers a wide range of features and capabilities,
                      making it one of the most popular frameworks available today.{" "}
                    </>
                  ),
                },
              ]}
            />
            <HomeLocation />
          </>
        )
      )}

      <Script id="websiteSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Cross Platform App Development Company",
            "url": "https://www.bitswits.co/cross-platform-app-development",
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
            "url": "https://www.bitswits.co/cross-platform-app-development",
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
            "name": "Cross Platform App Development Company",
            "image": "https://www.bitswits.co/_next/static/media/1.32be1789.png",
            "url": "https://www.bitswits.co/cross-platform-app-development",
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
            "name": "Cross Platform App Development Company",
            "image": "https://www.bitswits.co/_next/static/media/1.32be1789.png",
            "description": "With our cross-platform app development services, you can easily create apps that are compatible across multiple platforms. No more worrying about developing an app for every operating system; now you can develop and deploy one single app for both Android and iOS!",
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
