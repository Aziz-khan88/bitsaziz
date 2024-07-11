"use client"

import React, { useEffect, useState } from 'react'
import Sticky from "@/src/components/NewMobileApp/MobileSkicky/MobileSkicky"
import Bannerdubai from '@/src/components/NewMobileApp/Banner/Banner'
import NewAward from '@/src/components/NewMobileApp/NewAward/NewAward';
import Whowearenew from '@/src/components/NewMobileApp/WhoWeAre/WhoWeAre';
import FutureReady from '@/src/components/NewMobileApp/FutureReady/FutureReady';
import AppsLived from '@/src/components/NewMobileApp/AppsLived/AppsLived';
import AppsJourney from '@/src/components/NewMobileApp/AppsJourney/AppsJourney';
import Conviced from '@/src/components/NewMobileApp/Conviced/Conviced';
import NewHouston from '@/src/components/NewMobileApp/NewHouston/NewHouston';
import Industries from '@/src/components/NewMobileApp/Industries/Industries';
import Deliver from '@/src/components/NewMobileApp/Deliver/Deliver';
import LogoSlider from '@/src/components/NewMobileApp/LogoSlider/LogoSlider';
import JournyForm from '@/src/components/NewMobileApp/JourneyForm/JournyForm';
import Faqs from '@/src/components/NewMobileApp/Faqs/Faqs';
import Location from '@/src/components/NewMobileApp/Location/Location';

const page = ({ content }) => {
  // Skicky
  const [isHovered, setIsHovered] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showStickyThreshold = 700;

      if (scrollPosition > showStickyThreshold) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loc = () => {
    setIsHovered((prev) => !prev);
  };

  const handleAnchorClick = () => {
    loc();
    if (!showSticky) {
      setShowSticky(true);
    }
  };
  // Banner Content
  const Banner = {
    title: "Top Mobile App Development Services",
    desc: "Join the revolution with unparalleled expertise in mobile application development services specializing in iOS, Android, and cross-platform solutions that get your ROI on-point.",
  }
  // award Content
  const Award = {
    title: <>Your Partner For App Development <span>Services</span></>,
    desc: <>Collaborate with our development team for feature-rich mobile<br className='d-none d-xxl-block' /> apps to stay ahead of the competition.
    </>,

  }
  // Who We Are Content
  const WhoWeAre = {
    title: "This is Us",
    desc: <>As the torch bearer of mobile app development services in US, <span>BitsWits</span> offers the best app making services and excels in custom <span>mobile and web applications</span>, focusing on user-centric, innovative solutions. We specialize in healthcare, social media, and enterprise apps and software, enhancing operational efficiency and user engagement while boosting <span>ROI </span>for your business.
    </>,
    subtitleOne: "Soul Scribe ",
    subDescOne: "Soul Scribe is a groundbreaking social networking app which functions as digital diary, and you can enlist your loved ones to be part of you online journal. The app operates by using the freemium subscription model, providing a complimentary family room option that enables users to welcome someone from their circle of friends to share their memories. Users have the privilege to create and share profound moments with their loved ones. This makes Soul Scribe a social media experience that is different and personal.",
    subtitleTwo: "Ready App",
    subDescTwo: "The Ready App is a revolutionary platform invented to revolutionize the hiring process for the transportation industry. It fills the communication gap between drivers and recruiters by having an user-friendly interface along with features like secure messaging, personal meetings and real-time updates. Our platform solve issues such as data security, algorithm revisions, and user interface design among others in order to have a scalable and mutually beneficial solution. ",
    subtitleThree: "Greasy Monkey ",
    subDescThree: "Grease Monkey is a comprehensive automotive innovation system which provides everything ranging from car repairs to oil checkup. Serving as an independent app, Grease Monkey presents users with important factors to consider such as prices and locations and also client ratings for your vehicles. The app takes the convenience to a different level altogether.. With Grease Monkey, car owners can do regular maintenance for their cars in an easy way by just a few taps on their smartphones."
  }
  // Sample content data
  const menus = [
    { label: "Discovery Session", index: 0 },
    { label: "Documentation", index: 1 },
    { label: "Design", index: 2 },
    { label: "Execution", index: 3 },
    { label: "Integration & Testing", index: 4 },
    { label: "Deployment", index: 5 },
    { label: "Maintenance & Updates", index: 6 },
  ];
  const sections = [
    [
      {
        num: "01",
        title: "Discovery Session",
        content: `<p class='fontsfregular'>Understanding and recording what the client needs for the perfect mobile app development services that hit the mark.
        </p>`
      },
    ],
    [
      {
        num: "02",
        title: "Documentation",
        content: `<p class='fontsfregular'>Throughout the development process, creating detailed documentation is crucial for finalizing the Scope of Work, SDLC, and BRD so that the user-experience and features are finalized for the application right from the start. </p>`
      },
    ],
    [
      {
        num: "03",
        title: "Design",
        content: `<p class='fontsfregular'>This involves designing the application's architecture, including defining hardware and system requirements, system layout, and necessary platforms for native or cross-platform app development services.</p>`
      },
    ],
    [
      {
        num: "04",
        title: "Execution",
        content: `<p class='fontsfregular'>Writing code according to the previous design. This stage often involves multiple teams, especially in mobile app development services, focusing on different aspects such as iPhone app development services and Android app development.
        </p>`
      },
    ],
    [
      {
        num: "05",
        title: "Integration & Testing",
        content: `<p class='fontsfregular'> We use automation testing tools to debug your applications before sharing the final version with you. We make sure that the final product is user-friendly across multiple operating systems.</p>`
      },
    ],
    [
      {
        num: "06",
        title: "Deployment",
        content: `<p class='fontsfregular'>We deploy the application on Google Play Store and Apple App Store once the app has been checked for all the bugs and errors. We create all the necessary designs and write app store-friendly descriptions so that your app stands out on the list. </p>`
      },
    ],
    [
      {
        num: "07",
        title: "Maintenance & Updates",
        content: `<p class='fontsfregular'>After deployment, the application needs periodic maintenance to ensure it remains functional and up-to-date with the latest advancements. Our post-app development services help you update the application with the latest features. We update the latest versions of your app on Google Play Store and Apple App Store.  </p>`
      }
    ]
  ];
  const HoustonContent = {
    menus: menus,
    sections: sections,
  };

  return (
    <>
      <Sticky isHovered={isHovered} showSticky={showSticky} loc={loc} />
      <Bannerdubai content={Banner} />
      <NewAward content={Award} contentTwo={content} onAnchorClick={handleAnchorClick} />
      <Whowearenew content={WhoWeAre} contentTwo={content} onAnchorClick={handleAnchorClick} />
      <FutureReady />
      <AppsLived content={content} onAnchorClick={handleAnchorClick} />
      <AppsJourney content={content} onAnchorClick={handleAnchorClick} />
      <Conviced content={content} onAnchorClick={handleAnchorClick}/>
      <NewHouston content={HoustonContent} />
      <Industries />
      <Deliver />
      <LogoSlider />
      <JournyForm />
      <Faqs
        faqsData={[
          {
            question: "Are mobile app development services expensive?",
            answer: "The cost of developing a mobile app varies based on several factors, such as complexity, features, platform (iOS, Android, cross-platform), and the mobile app development services you choose. It's advisable to speak with several app developers and agencies to get quotes that are more suitable for you."
          },
          {
            question: "How much does it cost to develop an app in US?",
            answer: "The cost varies widely depending on the complexity and features of the app. Best app making services charge more due to their reputation and quality of work. Prices generally range from a few thousand dollars to hundreds of thousands depending on the time and effort."
          },
          {
            question: "What is the typical timeline for mobile app development?",
            answer: "Development time varies by app intricacy and features. A simple application can take around 6 months to launch while a complex app with two or multiple interfaces can take 9-12 months."
          },
          {
            question: "Do hybrid app development services develop apps for both iOS and Android?",
            answer: "Yes, our hybrid app development services have excelled in creating apps that function on iOS and Android platforms. They often employ frameworks like Flutter and React Native to ensure optimum functionality and visual appeal."
          },
          {
            question: "What is a typical app development process?",
            answer: "The process for app development includes ideation, UI/UX design, development, testing, and deployment. Each juncture ensures the app meets client expectations and functions exceptionally well across platforms."
          },
          {
            question: "Will my app be compatible with all devices?",
            answer: "BitsWits focuses on creating apps that work without fault across various devices and operating systems by employing advanced frameworks and rigorous testing methodologies."
          },
          {
            question: "Can we update mobile applications after launch?",
            answer: " Yes, our  app development services typically offer maintenance and updates to refine features and improve the app based on user feedback and technological advancements."
          },
          {
            question: "What data privacy measures are taken by your company?",
            answer: "Trailblazers of social media app development services, BitsWits prioritizes user data privacy by adhering to legal standards like GDPR and CCPA, ensuring secure data storage and transmission while integrating fail-safe consent mechanisms into the app."
          },
        ]}
      />
      <Location />
    </>
  )
}

export default page
