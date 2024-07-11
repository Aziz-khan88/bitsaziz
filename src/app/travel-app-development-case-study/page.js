"use client"
import React, { useState, useEffect } from "react";
//components 
import Banner from "../../components/CaseBanner";
import CaseGlamic from "../../components/CaseGlamic";
import CaseWants from "../../components/CaseWants";
import CaseGoal from "../../components/CaseGoal";
import CaseOvercoming from "../../components/CaseOvercoming";
import CaseAnimate from "../../components/CaseAnimate";
import CaseServices from "../../components/CaseServices";
import CaseChoose from "../../components/CaseChoose";
import CaseGlobal from "../../components/CaseGlobal";
import CaseCapabilities from "../../components/CaseCapabilities";
import Technologieswe from "../../components/Technologieswe";
import Nothing from "../../components/Nothing";
import HomeLocation from "../../components/HomeLocation";
//images
import banLogo from "/public/images/case-studies/case-travel/banner-logo.png";
import banImg from "/public/images/case-studies/case-travel/banner-img.png";
import slide1 from "/public/images/case-studies/case-travel/slide1.png";
import slide2 from "/public/images/case-studies/case-travel/slide2.png";
import slide3 from "/public/images/case-studies/case-travel/slide3.png";
import slide4 from "/public/images/case-studies/case-travel/slide4.png";
import features from "/public/images/case-studies/case-travel/features.png";
import faced from "/public/images/case-studies/case-travel/faced.png";
import tackling from "/public/images/case-studies/case-travel/tackling.png";
import goalImg from "/public/images/case-studies/case-travel/goal.png";
import animiImg1 from "/public/images/case-studies/case-travel/animi1.png";
import animiImg2 from "/public/images/case-studies/case-travel/animi2.png";
import animiImg3 from "/public/images/case-studies/case-travel/animi3.png";
import service1 from "/public/images/case-studies/case-travel/service1.png";
import service2 from "/public/images/case-studies/case-travel/service2.png";
import service3 from "/public/images/case-studies/case-travel/service3.png";
import service4 from "/public/images/case-studies/case-travel/service4.png";
import service5 from "/public/images/case-studies/case-travel/service5.png";
import chosImg1 from "/public/images/lp-images/icon1.png";
import chosImg2 from "/public/images/lp-images/icon2.png";
import chosImg3 from "/public/images/lp-images/icon3.png";
import chosImg4 from "/public/images/lp-images/icon4.png";
import chosImg5 from "/public/images/lp-images/icon5.png";
import chosImg6 from "/public/images/lp-images/icon6.png";
import chosImg7 from "/public/images/lp-images/icon7.png";
import chosImg8 from "/public/images/lp-images/icon8.png";
import chosImg9 from "/public/images/lp-images/icon9.png";

export default function TravelApp() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    return () => clearTimeout(timeout);
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
        banLogo={banLogo}
        title={<> Explore the World, One Click at a Time </>}
        banImg={banImg}
        bannerClass="tourista"
      />
      <CaseGlamic
        textArray1={[
          {
            title: (
              <>
                Travel App <span>Development</span>
              </>
            ),
            text: [
              <>
                <i>Tourista</i> is your premium travel app, simplifying every
                aspect of your journeys. From trip planning and interactive maps
                to local insights and seamless booking integration, Tourista has
                you covered.
              </>,
              <>
                Enjoy offline access, document your experiences in a travel
                journal, and stay updated with safety alerts. Whether you're a
                beginner or a frequent traveler, Tourista is your go-to app for
                a hassle-free and unforgettable travel adventure.
              </>,
            ],
          },
        ]}
        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: (
              <>
                Our consultants are ready to hear your idea. Request a free
                consultation with our app experts and transform it into a
                digital reality.
              </>
            ),
          },
        ]}
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}
        textArray3={[
          {
            title: (
              <>
                The <span>Starting</span> Point
              </>
            ),
            text: [
              <>
                Our client's inspiration for Tourista stemmed from their
                personal frustration with the complexities of travel planning.
                They realized that there was a need for a streamlined and
                user-friendly solution to help travelers make the most of their
                journeys.
              </>,

              <>
                Their desire to create an app that simplifies trip planning,
                enhances navigation, and provides valuable insights led to the
                inception of Tourista. The goal was to make travel accessible
                and enjoyable for every traveler out there!
              </>,
            ],
          },
        ]}
      />
      <CaseWants
        sections1={[
          {
            title: (
              <>
                Main <span>Features</span>
              </>
            ),
            textArray: [
              "Effortlessly create customized itineraries.",
              "Real-time navigation with points of interest.",
              "Curated recommendations and insider tips.",
              "Download maps and essential information.",
              "Secure flights, accommodations, and activities.",
              "Document memories and experiences.",
              "Simplify budgeting while traveling.",
              "Stay informed with travel advisories and weather updates.",
              "Intuitive design for seamless use.",
            ],
          },
        ]}
        wantImg1={features}
        sections2={[
          {
            title: (
              <>
                Challenges <span>We Faced</span>
              </>
            ),
            textArray: [
              "Combining various data sources.",
              "Balancing features and simplicity.",
              "Ensuring smooth offline use.",
              "Protecting user and payment data.",
              "Addressing diverse devices and systems.",
            ],
          },
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: (
              <>
                Trouble <span>Tackling</span>
              </>
            ),
            textArray: [
              "Employed robust APIs and data handling protocols for seamless data synchronization.",
              "Conducted extensive user testing and feedback loops to refine the interface.",
              "Utilized advanced caching mechanisms and efficient data storage.",
              "Implemented encryption and compliance with industry standards for data protection.",
              "Utilized versatile frameworks to ensure compatibility across various devices and operating systems.",
            ],
          },
        ]}
        wantImg3={tackling}
        lastPara={
          <>
            BitsWits took on the challenge of creating Tourista by assembling a
            talented team of developers, and designers. Through meticulous
            planning, agile development methodologies, and a commitment to
            user-centered design, BitsWits successfully crafted an app that
            simplifies travel, making it accessible and enjoyable for all.
          </>
        }
      />
      <CaseGoal
        golImg={goalImg}
        title={
          <>
            Start Your App Development Journey <br /> Effortlessly; Let
            <span>
              Bitswits Be Your <br /> Savior
            </span>
            With A Quick Tap!
          </>
        }
        goalClass="tourista"
      />
      <CaseOvercoming
        appData={[
          {
            title: (
              <>
                Overcoming <br /> Development Challenges{" "}
              </>
            ),
            description:
              "We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes.",
          },
          {
            title: (
              <>
                Hybrid <br /> Development Excellence{" "}
              </>
            ),
            description: (
              <>
                Our approach to app development is anything but
                one-size-fits-all. With a hybrid approach, we strike a balance
                between predictability and adaptability. For projects with
                clearly defined timeframes, we employ a waterfall approach to
                meet the deadlines. This helps us meet the compliance
                requirements and regulatory standards.{" "}
              </>
            ),
          },
          {
            title: (
              <>
                On-Time Delivery - <br /> Every Time{" "}
              </>
            ),
            description:
              "Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule.",
          },
          {
            title: (
              <>
                Erasing <br /> Time-zone Barriers{" "}
              </>
            ),
            description: (
              <>
                Our project managers are trained to remain considerate about
                time-zone differences, they take into account clients'
                availability and preferences. We prioritize cultural
                sensitivity, our developers made a system that shows clients'
                active hours along with their current location in google maps,
                and holidays around the globe.{" "}
              </>
            ),
          },
          {
            title: (
              <>
                Efficient <br /> Communication{" "}
              </>
            ),
            description:
              "BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction.",
          },
          {
            title: (
              <>
                Addressing <br /> Payment Disputes{" "}
              </>
            ),
            description: (
              <>
                At BitsWits, we rely on the Stripe payment method for all
                transactions. We've developed an automated dispute resolution
                portal to efficiently manage payment issues. Our portal also
                provides clear visibility into the different stages of reported
                payment disputes and their current statuses.{" "}
              </>
            ),
          },
        ]}
      />
      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />
      <CaseServices
        title={
          <><span>Services:</span> For </>
        }
        point1={<> Native Mobile App Development </>}
        point2={<> Stunning UI/UX Design </>}
        point3={<> Consumer/ Service Provider Interface </>}
        service1={service1}
        service2={service2}
        service3={service3}
        service4={service4}
        service5={service5}
      />
      <CaseChoose
        title={
          <>            <span>
            Why Trust <br /> BitsWits
          </span>
            with App <br /> Development?
          </>
        }
        text1={
          <>            We stand as the primary choice for mobile app development,
            exemplifying excellence in a dynamic field. Our team combines
            creativity and the most suitable tech stack to develop customized
            app solutions.{" "}
          </>
        }
        text2={
          <>            Our track record of delivering on time and within budget, coupled
            with a commitment to staying ahead of industry trends, sets us apart
            as the best partner for mobile app development.{" "}
          </>
        }
        items={[
          {
            image: chosImg1,
            text: (
              <>
                Experienced <br /> Professionals{" "}
              </>
            ),
          },
          {
            image: chosImg2,
            text: (
              <>
                On-Time <br /> Delivery{" "}
              </>
            ),
          },
          {
            image: chosImg3,
            text: (
              <>
                Cost-Effective <br /> Solutions{" "}
              </>
            ),
          },
          {
            image: chosImg4,
            text: (
              <>
                Scalable and <br /> Secure Apps{" "}
              </>
            ),
          },
          {
            image: chosImg5,
            text: (
              <>
                User-Centric <br /> Design{" "}
              </>
            ),
          },
          {
            image: chosImg6,
            text: (
              <>
                Customized <br /> Development{" "}
              </>
            ),
          },
          {
            image: chosImg7,
            text: (
              <>
                Error-Free <br /> Delivery{" "}
              </>
            ),
          },
          {
            image: chosImg8,
            text: (
              <>
                Transparent <br /> Communication{" "}
              </>
            ),
          },
          {
            image: chosImg9,
            text: (
              <>
                Support and <br /> Maintenance{" "}
              </>
            ),
          },
        ]}
      />
      <CaseGlobal />
      <CaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />

    </>
  );
}
