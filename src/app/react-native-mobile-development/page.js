"use client"
import React, { useState, useEffect } from "react";
import Script from "next/script";
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
import customios from "/public/images/reactnativeappdevelopment/reactnativemobileappdevelopmentservices.png";
import iphoneapp from "/public/images/reactnativeappdevelopment/expertreactnativecodedevelopmentservices.png";
import applewatch from "/public/images/reactnativeappdevelopment/expertreactnativeappmaintenanceservices.png";
import appletvappdevelopment from "/public/images/reactnativeappdevelopment/hybridmobileappwithreactnative.png";
import iphoneappdesigning from "/public/images/reactnativeappdevelopment/customreactplugindevelopmentforapps.png";
import hybridiphone from "/public/images/reactnativeappdevelopment/customreactnativeuiuxdesignforapps.png";
import AppsLived from "@/src/components/NewMobileApp/AppsLived/AppsLived";
import HomeCaseStudies from "@/src/components/HomeCaseStudies";
import HomeIndustries from "@/src/components/HomeIndustries";

export default function ReactNativeMobile() {

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

  // ===============================

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
        subtitle: "Go Beyond Expectations With",
        title2: "React Native App Development",
        title3: "In A Whole New Way - Access Unique Services & Solutions!",
      },
      serdata: [
        {
          title: "React Native Mobile App Development Services",
          text: "Our expert team of React Native developers create high-performance, native-like mobile apps for both Android and iOS platforms. With our React Native mobile app development services, you can ensure the best user experience for your app users.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Expert React Native Code Development Services",
          text: "Our React Native code development services ensure your app is developed with clean, efficient, and high-quality code. Our experienced developers ensure that your app's performance is optimized for performance and scalability.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Expert React Native App Maintenance Services",
          text: "We provide reliable and efficient React Native app maintenance services to maintain your app up-to-date with the latest features and functionalities. Our team of experts ensures that your app runs smoothly, is bug-free, and is optimized for performance.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Hybrid Mobile App with React Native",
          text: "Our React Native, hybrid mobile app development services combine the benefits of both native and web-based apps. This approach allows for faster development, cost-effectiveness, & cross-platform compatibility.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Custom React Plugin Development for Apps",
          text: "Our React Native plugin development services allow you to integrate custom features into your app. We create customized plugins that enhance your app's functionality and provide a unique user experience.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Custom React Native UI/UX Design for Apps",
          text: "Our React Native UI/UX design services ensures your app has an intuitive, user-friendly interface with stunning visuals. We create customized designs for your app that look great and provide a seamless user experience.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
      ],
    },
  ];

  return (
    <>
      <ServicesBanner
        subtitle="BitsWits Is Your One-Stop Shop For"
        title={<> React Native App Development </>}
        text={
          <>
            With our React Native experts, you can effortlessly create powerful,
            engaging mobile applications that perform optimally across multiple
            platforms. Our developers focus on leveraging the best of both
            worlds - the SPEED and AGILITY of native development with the
            flexibility.
          </>
        }
        video={
          <video
            autoPlay
            muted
            src="https://player.vimeo.com/progressive_redirect/playback/961579998/rendition/1080p/file.mp4?loc=external&log_user=0&signature=03fd43f56b649c6927e31458c803a4d8c1fffacce875645af987b9c076ef6814"
            className="w-50"
          ></video>
        }
        assignClass="react"
      />
      <People People="people" />
      {isMobile ? (
        showMobileComponents && (
          <>
            <HomeBannerSliderlp />
            <LpForm addresClass="iosclass" />
            <Nothing Nothing="nothingLp6" />
            {isSliderActive ? (
              <ServicesMaintain
                assignClass="react"
                subtitle={<> Go Beyond Expectations With </>}
                title={<> React Native App Development </>}
                title1={
                  <> In A Whole New Way - Access Unique Services & Solutions! </>
                }
                appContent={[]}
                appContent1={[
                  {
                    title: "React Native Mobile App Development Services",
                    text: "Our expert team of React Native developers create high-performance, native-like mobile apps for both Android and iOS platforms. With our React Native mobile app development services, you can ensure the best user experience for your app users.",
                    appclass: "app",
                  },
                  {
                    title: <> Expert React Native Code Development Services </>,
                    text: (
                      <>
                        Our React Native code development services ensure your app is
                        developed with clean, efficient, and high-quality code. Our
                        experienced developers ensure that your app's performance is
                        optimized for performance and scalability.
                      </>
                    ),
                    appclass: "app1",
                  },
                  {
                    title: <> Expert React Native App Maintenance Services </>,
                    text: "We provide reliable and efficient React Native app maintenance services to maintain your app up-to-date with the latest features and functionalities. Our team of experts ensures that your app runs smoothly, is bug-free, and is optimized for performance.",
                    appclass: "app2",
                  },
                ]}
                appContent2={[
                  {
                    title: "Hybrid Mobile App with React Native",
                    text: "Our React Native, hybrid mobile app development services combine the benefits of both native and web-based apps. This approach allows for faster development, cost-effectiveness, & cross-platform compatibility.",
                    appclass: "app3",
                  },
                ]}
                appContent3={[
                  {
                    title: (
                      <>
                        Custom React Plugin <br /> Development for Apps
                      </>
                    ),
                    text: (
                      <>
                        Our React Native plugin development services allow you to
                        integrate custom features into your app. We create customized
                        plugins that enhance your app's functionality and provide a
                        unique user experience.
                      </>
                    ),
                    appclass: "app4",
                  },
                  {
                    title: (
                      <>
                        Custom React Native UI/UX <br /> Design for Apps
                      </>
                    ),
                    text: "Our React Native UI/UX design services ensures your app has an intuitive, user-friendly interface with stunning visuals. We create customized designs for your app that look great and provide a seamless user experience.",
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
              title="Explore Our React Native App Development Journey"
              desc="We believe in efficiency without compromising quality. Our
            streamlined process for app development is <br /> designed to be
            transparent and collaborative, ensuring your vision comes to life
            exactly as you imagined."
            />
            <Justbuildit />
            <LpChoose transform="transform" />
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
            <Technologieswe />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <ServicesFaqs
              faqsData={[
                {
                  question: "Is React Native good for mobile app development?",
                  answer: (
                    <>
                      React Native is one of the most popular and widely used
                      frameworks for developing mobile apps. It provides a great
                      platform for creating natively rendered, high-performance mobile
                      applications that look and feel like they were made specifically
                      for the user's device. This framework makes it easy to create
                      apps with beautiful user interfaces, clean code, and rapid
                      development cycles. It also offers a few advantages when it
                      comes to mobile app development, such as the ability to write
                      code once and deploy across multiple platforms, access to native
                      device features, and scalability for larger projects. All in
                      all, React Native app development agency is an excellent choice
                      for developing mobile apps.
                    </>
                  ),
                },
                {
                  question:
                    "How do you create a simple mobile app using React Native?",
                  answer: (
                    <>
                      Creating a simple mobile app using React Native is incredibly
                      easy. With its intuitive user interface, you can get started in
                      no time! All you need to do is:
                      <br />
                      <br />
                      1. Download and install the React Native command line interface
                      (CLI) on your development machine.
                      <br />
                      <br />
                      2. Create a new project by running the CLI command ‘react-native
                      init NewProjectName’.
                      <br />
                      <br />
                      3. Use the React Native components such as View, Text, Image,
                      and others to design your app’s user interface.
                      <br />
                      <br />
                      4. Add navigation between different scenes in your app using
                      React Navigation library.
                      <br />
                      <br />
                      5. Add application logic and interactivity with React JS, which
                      is the language used by React Native.
                      <br />
                      <br />
                      6. Run your app in an emulator or on a physical device to see
                      and interact with it.
                      <br />
                      <br />
                      7. When ready, you can build for production and deploy to both
                      the iOS App Store and Google Play Store. With React Native,
                      creating a simple mobile app is as easy as pie. Get started
                      today and create React app in no time! Hire react native app
                      developer to achieve business excellence.
                    </>
                  ),
                },
                {
                  question: "Can we convert React web app to mobile app?",
                  answer: (
                    <>
                      The answer is YES! We can convert React web apps to mobile apps.
                      With a little know-how, you can turn your website into an app in
                      no time. Here at BitsWits, we are experts in taking websites and
                      transforming them into mobile experiences that engage users and
                      drive conversions. Our team of experienced developers will take
                      your website and convert it into the ultimate mobile app
                      experience. We use React Native to create apps that are fast,
                      reliable, and user-friendly, so you can trust your website is in
                      good hands. Get in touch today and let BitsWits, the best React
                      Native development company turn your web React app into a mobile
                      masterpiece!
                    </>
                  ),
                },
                {
                  question: "How to make React app mobile friendly?",
                  answer: (
                    <>
                      The answer is YES! We can convert React web apps to mobile apps.
                      With a little know-how, you can turn your website into an app in
                      no time. Here at BitsWits, we are experts in taking websites and
                      transforming them into mobile experiences that engage users and
                      drive conversions. Our team of experienced developers will take
                      your website and convert it into the ultimate mobile app
                      experience. We use React Native to create apps that are fast,
                      reliable, and user-friendly, so you can trust your website is in
                      good hands. Get in touch today and let us turn your web React
                      app into a mobile masterpiece!
                    </>
                  ),
                },
                {
                  question: "What does a React Native app developer do?",
                  answer: (
                    <>
                      A React Native app developer is an expert in creating apps that
                      can seamlessly run on both Android and iOS mobile platforms.
                      They take advantage of the flexibility of JavaScript to create
                      natively rendered, responsive user interfaces for mobile
                      applications. The developer should have a deep understanding of
                      modern web technologies like HTML5, CSS3, and JavaScript as well
                      as a strong grasp of the React Native framework. He is also
                      familiar with mobile development platforms such as iOS and
                      Android, including device-specific APIs for customizing an app's
                      appearance and functionality across different devices. In short,
                      a React Native app developer is responsible for designing,
                      building, and deploying dynamic applications that are optimized
                      for performance on both Android and iOS devices.
                    </>
                  ),
                },
                {
                  question:
                    "Why is it necessary to hire React Native app developers for businesses?",
                  answer: (
                    <>
                      Hiring React Native app developers for businesses is a smart
                      decision considering the wide range of benefits it provides.
                      With React Native, businesses can create high-quality
                      cross-platform mobile applications that are both reliable and
                      efficient. Development times are shorter, making it faster to
                      launch new products or updates. Additionally, native features
                      can be implemented with ease while providing a native look and
                      feel.
                      <br />
                      <br />
                      Moreover, React Native offers flexibility in development as well
                      as scalability to ensure that the applications built with it can
                      accommodate complex features, such as real-time updates, payment
                      systems, and more. The framework also allows developers to reuse
                      code for multiple platforms, ultimately saving both time and
                      money for businesses.
                    </>
                  ),
                },
                {
                  question:
                    "Why is BitsWits the perfect company for native app development services?",
                  answer: (
                    <>
                      BitsWits offers the best React Native app development services.
                      With our experienced team of developers, your project will be
                      completed quickly and efficiently. We are experts in developing
                      applications for both iOS and Android platforms, so you can rest
                      assured that your project will be designed with the latest
                      technology. Our developers utilize industry-leading tools and
                      frameworks to ensure that your app is built correctly and
                      optimized for maximum performance.
                      <br />
                      <br />
                      We are also capable of creating customized solutions that meet
                      the specific needs of your business. Our team understands the
                      importance of creating a user experience that engages users and
                      encourages them to use your application frequently. We can help
                      you integrate features, design attractive interfaces, and
                      optimize your React Native iOS app for different devices. Hire
                      React JS application development expert now!
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
            {isSliderActive ? (
              <ServicesMaintain
                assignClass="react"
                subtitle={<> Go Beyond Expectations With </>}
                title={<> React Native App Development </>}
                title1={
                  <> In A Whole New Way - Access Unique Services & Solutions! </>
                }
                appContent={[]}
                appContent1={[
                  {
                    title: "React Native Mobile App Development Services",
                    text: "Our expert team of React Native developers create high-performance, native-like mobile apps for both Android and iOS platforms. With our React Native mobile app development services, you can ensure the best user experience for your app users.",
                    appclass: "app",
                  },
                  {
                    title: <> Expert React Native Code Development Services </>,
                    text: (
                      <>
                        Our React Native code development services ensure your app is
                        developed with clean, efficient, and high-quality code. Our
                        experienced developers ensure that your app's performance is
                        optimized for performance and scalability.
                      </>
                    ),
                    appclass: "app1",
                  },
                  {
                    title: <> Expert React Native App Maintenance Services </>,
                    text: "We provide reliable and efficient React Native app maintenance services to maintain your app up-to-date with the latest features and functionalities. Our team of experts ensures that your app runs smoothly, is bug-free, and is optimized for performance.",
                    appclass: "app2",
                  },
                ]}
                appContent2={[
                  {
                    title: "Hybrid Mobile App with React Native",
                    text: "Our React Native, hybrid mobile app development services combine the benefits of both native and web-based apps. This approach allows for faster development, cost-effectiveness, & cross-platform compatibility.",
                    appclass: "app3",
                  },
                ]}
                appContent3={[
                  {
                    title: (
                      <>
                        Custom React Plugin <br /> Development for Apps
                      </>
                    ),
                    text: (
                      <>
                        Our React Native plugin development services allow you to
                        integrate custom features into your app. We create customized
                        plugins that enhance your app's functionality and provide a
                        unique user experience.
                      </>
                    ),
                    appclass: "app4",
                  },
                  {
                    title: (
                      <>
                        Custom React Native UI/UX <br /> Design for Apps
                      </>
                    ),
                    text: "Our React Native UI/UX design services ensures your app has an intuitive, user-friendly interface with stunning visuals. We create customized designs for your app that look great and provide a seamless user experience.",
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
              title="Explore Our React Native App Development Journey"
              desc="We believe in efficiency without compromising quality. Our
            streamlined process for app development is <br /> designed to be
            transparent and collaborative, ensuring your vision comes to life
            exactly as you imagined."
            />
            <Justbuildit />
            <LpChoose transform="transform" />
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
            <Technologieswe />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <ServicesFaqs
              faqsData={[
                {
                  question: "Is React Native good for mobile app development?",
                  answer: (
                    <>
                      React Native is one of the most popular and widely used
                      frameworks for developing mobile apps. It provides a great
                      platform for creating natively rendered, high-performance mobile
                      applications that look and feel like they were made specifically
                      for the user's device. This framework makes it easy to create
                      apps with beautiful user interfaces, clean code, and rapid
                      development cycles. It also offers a few advantages when it
                      comes to mobile app development, such as the ability to write
                      code once and deploy across multiple platforms, access to native
                      device features, and scalability for larger projects. All in
                      all, React Native app development agency is an excellent choice
                      for developing mobile apps.
                    </>
                  ),
                },
                {
                  question:
                    "How do you create a simple mobile app using React Native?",
                  answer: (
                    <>
                      Creating a simple mobile app using React Native is incredibly
                      easy. With its intuitive user interface, you can get started in
                      no time! All you need to do is:
                      <br />
                      <br />
                      1. Download and install the React Native command line interface
                      (CLI) on your development machine.
                      <br />
                      <br />
                      2. Create a new project by running the CLI command ‘react-native
                      init NewProjectName’.
                      <br />
                      <br />
                      3. Use the React Native components such as View, Text, Image,
                      and others to design your app’s user interface.
                      <br />
                      <br />
                      4. Add navigation between different scenes in your app using
                      React Navigation library.
                      <br />
                      <br />
                      5. Add application logic and interactivity with React JS, which
                      is the language used by React Native.
                      <br />
                      <br />
                      6. Run your app in an emulator or on a physical device to see
                      and interact with it.
                      <br />
                      <br />
                      7. When ready, you can build for production and deploy to both
                      the iOS App Store and Google Play Store. With React Native,
                      creating a simple mobile app is as easy as pie. Get started
                      today and create React app in no time! Hire react native app
                      developer to achieve business excellence.
                    </>
                  ),
                },
                {
                  question: "Can we convert React web app to mobile app?",
                  answer: (
                    <>
                      The answer is YES! We can convert React web apps to mobile apps.
                      With a little know-how, you can turn your website into an app in
                      no time. Here at BitsWits, we are experts in taking websites and
                      transforming them into mobile experiences that engage users and
                      drive conversions. Our team of experienced developers will take
                      your website and convert it into the ultimate mobile app
                      experience. We use React Native to create apps that are fast,
                      reliable, and user-friendly, so you can trust your website is in
                      good hands. Get in touch today and let BitsWits, the best React
                      Native development company turn your web React app into a mobile
                      masterpiece!
                    </>
                  ),
                },
                {
                  question: "How to make React app mobile friendly?",
                  answer: (
                    <>
                      The answer is YES! We can convert React web apps to mobile apps.
                      With a little know-how, you can turn your website into an app in
                      no time. Here at BitsWits, we are experts in taking websites and
                      transforming them into mobile experiences that engage users and
                      drive conversions. Our team of experienced developers will take
                      your website and convert it into the ultimate mobile app
                      experience. We use React Native to create apps that are fast,
                      reliable, and user-friendly, so you can trust your website is in
                      good hands. Get in touch today and let us turn your web React
                      app into a mobile masterpiece!
                    </>
                  ),
                },
                {
                  question: "What does a React Native app developer do?",
                  answer: (
                    <>
                      A React Native app developer is an expert in creating apps that
                      can seamlessly run on both Android and iOS mobile platforms.
                      They take advantage of the flexibility of JavaScript to create
                      natively rendered, responsive user interfaces for mobile
                      applications. The developer should have a deep understanding of
                      modern web technologies like HTML5, CSS3, and JavaScript as well
                      as a strong grasp of the React Native framework. He is also
                      familiar with mobile development platforms such as iOS and
                      Android, including device-specific APIs for customizing an app's
                      appearance and functionality across different devices. In short,
                      a React Native app developer is responsible for designing,
                      building, and deploying dynamic applications that are optimized
                      for performance on both Android and iOS devices.
                    </>
                  ),
                },
                {
                  question:
                    "Why is it necessary to hire React Native app developers for businesses?",
                  answer: (
                    <>
                      Hiring React Native app developers for businesses is a smart
                      decision considering the wide range of benefits it provides.
                      With React Native, businesses can create high-quality
                      cross-platform mobile applications that are both reliable and
                      efficient. Development times are shorter, making it faster to
                      launch new products or updates. Additionally, native features
                      can be implemented with ease while providing a native look and
                      feel.
                      <br />
                      <br />
                      Moreover, React Native offers flexibility in development as well
                      as scalability to ensure that the applications built with it can
                      accommodate complex features, such as real-time updates, payment
                      systems, and more. The framework also allows developers to reuse
                      code for multiple platforms, ultimately saving both time and
                      money for businesses.
                    </>
                  ),
                },
                {
                  question:
                    "Why is BitsWits the perfect company for native app development services?",
                  answer: (
                    <>
                      BitsWits offers the best React Native app development services.
                      With our experienced team of developers, your project will be
                      completed quickly and efficiently. We are experts in developing
                      applications for both iOS and Android platforms, so you can rest
                      assured that your project will be designed with the latest
                      technology. Our developers utilize industry-leading tools and
                      frameworks to ensure that your app is built correctly and
                      optimized for maximum performance.
                      <br />
                      <br />
                      We are also capable of creating customized solutions that meet
                      the specific needs of your business. Our team understands the
                      importance of creating a user experience that engages users and
                      encourages them to use your application frequently. We can help
                      you integrate features, design attractive interfaces, and
                      optimize your React Native iOS app for different devices. Hire
                      React JS application development expert now!
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
            "name": " React Native Mobile App Development Company ",
            "url": " https://www.bitswits.co/react-native-mobile-development ",
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
              "url": " https://www.bitswits.co/react-native-mobile-development ",
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
            "name": " React Native Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/static/media/card1.fc7177be.png",
            "url": " https://www.bitswits.co/react-native-mobile-development",
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
            "name": "React Native Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/static/media/card1.fc7177be.png",
            "description": "With our React Native experts, you can effortlessly create powerful, engaging mobile applications that perform optimally across multiple platforms. Our developers focus on leveraging the best of both worlds - the SPEED and AGILITY of native development with the flexibility",
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
