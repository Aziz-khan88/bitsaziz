"use client"
import React, { useEffect, useState } from "react";
//components
import ServicesBanner from "../../components/ServicesBanner";
import ServicesMaintain from "../../components/ServicesMaintain";
import ServicesPortfolio from "../../components/ServicesPortfolio";
import Newsuccess from "../../components/NewMblSuccess";
import Technologieswe from "../../components/Technologieswe";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import Formnewlp from "../../components/Formnewlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/newMobilePageImages/banner_image.png";
import ios from "/public/images/mobileApp/ios.png";
import android from "/public/images/mobileApp/android.png";
import web from "/public/images/mobileApp/web.png";
import flutter from "/public/images/mobileApp/flutter.png";
import react from "/public/images/mobileApp/react.png";
import cross from "/public/images/mobileApp/cross.png";

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
  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        title1: (<> Maintaining digital quality with our collection of customizable services </>)
      },
      serdata: [
        {
          title: (<> iOS Application <br /> Development </>),
          text: "We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!",
          appclass: "app",
          imgservice: ios,
        },
        {
          title: (<> Android Application <br /> Development </>),
          text: "We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.",
          appclass: "app1",
          imgservice: android,
        },
        {
          title: (<> Web App <br /> Development </>),
          text: "We offer end-to-end web app development services. Our team of skilled web app developers utilize the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!",
          appclass: "app2",
          imgservice: web,
        },
        {
          title: "Flutter App Development",
          text: "Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.",
          appclass: "app3",
          imgservice: flutter,
        },
        {
          title: "React Native App Development",
          text: (<> Our React Native app developers specialize in creating
            top-notch, performance-oriented native mobile apps for Android
            and iOS platforms. We follow a robust development process and
            utilize the latest technologies to deliver customized solutions
            that meet our clients' business objectives. </>),
          appclass: "app4",
          imgservice: react,
        },
        {
          title: "Cross Platform App Development",
          text: "We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.",
          appclass: "app5",
          imgservice: cross,
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
        subtitle="A TOP"
        title={<> Mobile App Development Company At Your Service </>}
        text={
          <>
            We deliver great results, on time and on budget. Contact us to start
            talking about your project today!
          </>
        }
        BannerImage={BannerImage}
        assignClass="mobile"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="mobile"
          title1={<> Maintaining digital quality with our collection of customizable services </>}
          appContent={[]}
          appContent1={[
            {
              title: (<> iOS Application <br /> Development </>),
              text: "We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!",
              appclass: "app",
            },
            {
              title: (<> Android Application <br /> Development </>),
              text: "We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.",
              appclass: "app1",
            },
            {
              title: (<> Web App <br /> Development </>),
              text: "We offer end-to-end web app development services. Our team of skilled web app developers utilize the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Flutter App Development",
              text: "Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "React Native App Development",
              text: (
                <>
                  Our React Native app developers specialize in creating
                  top-notch, performance-oriented native mobile apps for Android
                  and iOS platforms. We follow a robust development process and
                  utilize the latest technologies to deliver customized solutions
                  that meet our clients' business objectives.
                </>
              ),
              appclass: "app4",
            },
            {
              title: "Cross Platform App Development",
              text: "We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.",
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
        title="Explore Our Mobile App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
              streamlined process for app development is <br /> designed to be
              transparent and collaborative, ensuring your vision comes to life
              exactly as you imagined."
      />
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
            question: "What is mobile application development?",
            answer: (
              <>
                Mobile application development creates software applications
                that run on mobile devices and other connected devices, such as
                wearables, automotive systems, cameras, and more. It requires
                skill sets in design, development, testing, deployment, and
                maintenance to create innovative user experiences across
                multiple platforms. With that being said, businesses hire mobile
                app developers to stay ahead of the competition and deliver
                market-leading products to their customers.
              </>
            ),
          },
          {
            question: "Does BitsWits offer hybrid and native app development?",
            answer: (
              <>
                BitsWits has a team of the best mobile app developers expert in
                providing customized development solutions, whether Hybrid or
                Native mobile application development is required. Our
                developers always come up with creative and innovative app ideas
                that are best in your interest.
              </>
            ),
          },
          {
            question:
              "Why choose BitsWits as a mobile app development company?",
            answer: (
              <>
                BitsWits is a top mobile app development company due to its
                decent clientele, commitment to excellence, and innovative
                mobile app development solutions. We enjoy the top spot in the
                application development industry with affordable packages and
                professional services.
              </>
            ),
          },
          {
            question: "Is there any customer support available?",
            answer: (
              <>
                Yes, BitsWits offers 24/7 incredible customer support, even
                post-mobile apps development USA. We do not let our customers
                hang in the middle with any query that may bring trouble to
                them.
              </>
            ),
          },
          {
            question: "How to choose a mobile app development company?",
            answer: (
              <>
                Checking client portfolios, communicating your requirements
                clearly, and considering the development cost will help you
                choose the best mobile app development agency. BitsWits
                practices open communication so that the solution to your query
                is answered adequately to provide you with the utmost
                satisfaction.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater to?",
            answer: (
              <>
                At BitsWits, we specialize in developing innovative and
                efficient mobile applications for various industries across the
                United States. We offer customized mobile solutions from
                e-commerce to healthcare and gaming to meet each client's
                specific requirements and business. We are a mobile application
                development company dedicated to creating apps that cater to
                each client's unique needs.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />

    </>
  );
}
