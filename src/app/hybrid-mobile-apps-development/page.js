"use client"

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
import BannerImage from "/public/hybridmbldevelopment/banner_image.png";
import customios from "/public/images/hybirdappdevelopement/flutter.png";
import iphoneapp from "/public/images/hybirdappdevelopement/react.png";
import applewatch from "/public/images/hybirdappdevelopement/ionic.png";
import appletvappdevelopment from "/public/images/hybirdappdevelopement/xamarin.png";

export default function HybridMobile() {

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
        title2: "Hybrid App Development Services",
      },
      serdata: [
        {
          title: "Flutter",
          text: "Flutter is a popular framework for hybrid mobile app development that allows you to build high-quality, native-like mobile applications for both Android and iOS using a single codebase.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: <> React </>,
          text: (
            <>

              React is a popular framework for hybrid mobile app development
              that allows you to build mobile applications for both Android and
              iOS using a single codebase.
            </>
          ),
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: <> Ionic </>,
          text: "Ionic is a popular framework for hybrid mobile app development that enables you to build mobile applications for various platforms, including Android, iOS, and the Web.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Xamarin",
          text: "Xamarin is a popular framework for hybrid mobile app development that allows you to build mobile applications for iOS and Android using C# and .NET.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
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
        title={<> Hybrid Mobile App Development Company In USA </>}
        text={
          <>
            BitsWits is the go-to hub for all your hybrid mobile app development
            needs in the USA. We are a leading technology company that excels in
            creating cost-effective and efficient hybrid mobile applications for
            businesses.
          </>
        }
        BannerImage={BannerImage}
        assignClass="hybrid"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="hybrid"
          title={<> Hybrid App Development Services </>}
          appContent={[]}
          appContent1={[
            {
              title: "Flutter",
              text: "Flutter is a popular framework for hybrid mobile app development that allows you to build high-quality, native-like mobile applications for both Android and iOS using a single codebase.",
              appclass: "app",
            },
            {
              title: <> React </>,
              text: (
                <>
                  React is a popular framework for hybrid mobile app development
                  that allows you to build mobile applications for both Android
                  and iOS using a single codebase.
                </>
              ),
              appclass: "app1",
            },
            {
              title: <> Ionic </>,
              text: "Ionic is a popular framework for hybrid mobile app development that enables you to build mobile applications for various platforms, including Android, iOS, and the Web.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Xamarin",
              text: "Xamarin is a popular framework for hybrid mobile app development that allows you to build mobile applications for iOS and Android using C# and .NET.",
              appclass: "app3",
            },
          ]}
          appContent3={[]}
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
        title="Explore Our Hybird App Development Journey"
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
            link: "#",
          },
          {
            number: "02",
            title: "Get A Quote",
            text: "Get an exact cost breakdown structure of your app.",
            buttonText: "Chat Now!",
            link: "#",
          },
          {
            number: "03",
            title: "Build An MVP",
            text: "Start your app development journey with no-obligation consultation via email and phone.",
            buttonText: "Call Now!",
            link: "#",
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
            question: "What is a hybrid mobile app?",
            answer: (
              <>

                A hybrid mobile app is a type of mobile application that
                combines elements of both native and web applications. It is
                built using web technologies (HTML, CSS, and JavaScript) and
                wrapped in a native container for distribution.
              </>
            ),
          },
          {
            question:
              "What are the advantages of hybrid mobile app development?",
            answer: (
              <>

                1. Cost-effective development. <br />
                <br />
                2. Cross-platform compatibility. <br />
                <br />
                3. Faster development cycles. <br />
                <br />
                4. Access to device features through plugins. <br />
                <br />
                5. Single codebase for multiple platforms.
              </>
            ),
          },
          {
            question:
              "Which frameworks are commonly used for hybrid mobile app development?",
            answer: (
              <>

                Ionic, React Native, Xamarin, PhoneGap (Cordova), and Flutter
                are popular frameworks for hybrid mobile app development.
              </>
            ),
          },
          {
            question: "How does a hybrid app differ from a native app?",
            answer: (
              <>

                Native apps are developed for a specific platform (iOS or
                Android) using platform-specific languages (Swift/Obj-C for iOS,
                Java/Kotlin for Android), while hybrid apps use web technologies
                and can run on multiple platforms.
              </>
            ),
          },
          {
            question: "Are hybrid apps as performant as native apps?",
            answer: (
              <>

                Hybrid apps might not perform as well as native apps in certain
                scenarios, especially for graphics-intensive or complex
                applications. However, advancements in hybrid frameworks have
                improved performance significantly.
              </>
            ),
          },
          {
            question: "What is the role of WebView in hybrid app development?",
            answer: (
              <>

                WebView is a component that allows displaying web content within
                a native app. In hybrid development, the WebView is used to
                render the user interface of the application.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />

    </>
  );
}
