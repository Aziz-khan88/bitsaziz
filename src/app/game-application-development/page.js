"use client"

import Script from "next/script";
import React, { useState, useEffect } from "react";
// style
import styles from "@/styles/ServicesAdvantage.module.css";
//components
import TechnologiesGames from "../../components/TechnologiesGames";
import ServicesBanner from "../../components/ServicesBanner";
import ServicesAdvantage from "../../components/ServicesAdvantage";
import ServiceTarget from "../../components/ServiceTarget";
import ServicesMaintain from "../../components/ServicesMaintain";
import ServiceSolutions from "../../components/ServiceSolutions";
import ServiceGenre from "../../components/ServiceGenre";
import ServiceEngage from "../../components/ServiceEngage";
import Newsuccess from "../../components/NewMblSuccess";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import HomeBannerSlider from "../../components/HomeBannerSlider";
import LpForm from "../../components/LpFormprops";
import Nothing from "../../components/Nothing";
import People from "../../components/People";
import Partnerships from "../../components/Partnerships";
import Globallp6 from "../../components/GlobalLp6";
import Formnewlp from "../../components/Formnewlp";
import Justbuildit from "../../components/Justbuildit";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/newMobilePageImages/gameappbanner.png";
import AdvantageOne from "/public/newHomePageImages/lady.png";
import Solution from "/public/newHomePageImages/playgame.png";
import gameicon1 from "/public/gameicon/1.png";
import gameicon2 from "/public/gameicon/2.png";
import gameicon3 from "/public/gameicon/3.png";
import main from "/public/shark/main.png";
import engIcon1 from "/public/shark/game-shark1.png";
import engIcon2 from "/public/shark/game-shark2.png";
import engIcon3 from "/public/shark/game-shark3.png";
import engIcon4 from "/public/shark/game-shark4.png";
import customios from "/public/images/gameappdevelopement/unity3dgames.png";
import iphoneapp from "/public/images/gameappdevelopement/virtualrealitygames.png";
import applewatch from "/public/images/gameappdevelopement/3dgamedevelopment.png";
import appletvappdevelopment from "/public/images/gameappdevelopement/unrealgamedevelopment.png";
import iphoneappdesigning from "/public/images/gameappdevelopement/argamedevelopment.png";
import hybridiphone from "/public/images/gameappdevelopement/mrgamedevelopment.png";
import react from "/public/images/gameappdevelopement/crossplatformgamedevelopment.png";
import reactnative from "/public/images/gameappdevelopement/buildboxgamedevelopment.png";
//
import techIcon1 from "/public/gametech/game/icon1.png";
import techIcon2 from "/public/gametech/game/icon2.png";
import techIcon3 from "/public/gametech/game/icon3.png";
import techIcon4 from "/public/gametech/game/icon4.png";
import techIcon5 from "/public/gametech/game/icon5.png";
import techIcon6 from "/public/gametech/game/icon6.png";

export default function Gameapplicationdevelopment() {
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
        subtitle: "The Work We Undertake",
        title1: "The Genres Of Games We Develop",
        text: `We are famous for creating immersive game experiences with engaging storylines, stunning visuals, and innovative gameplay mechanics.
        Here's an exciting rundown of what we bring to the table.`,
      },
      serdata: [
        {
          title: " Unity 3D Games",
          text: `We work with Unity 3D technology to foster unforgettable gaming
          experiences that push the boundaries of what's possible. Whether
          you want an action-packed shooter or a more peaceful puzzle
          title, we can ensure your game is a success and tends to become
          a revenue-generating machine!`,
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Virtual Reality Games",
          text: `Producing immersive and mind-blowing virtual reality experiences
          for gamers and businesses alike. Our games are designed with the
          player's experience in mind and feature intuitive controls,
          immersive soundscapes, and realistic visuals that transport
          players into another world. Get ready to hook your gamers and
          urge them to return for more!`,
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "3D Game Development",
          text: `BitsWits masters the art of creating stunning 3D games,
          harnessing the power of cutting-edge technology and
          state-of-the-art tools. We know that a successful 3D game
          requires more than just great visuals – it's also about a
          compelling gameplay experience. Hence, we ensure games that are
          balanced, entertaining, and mesmerizing for players of all ages!
          Believe it or not, we are the perfect place to get your next
          gaming project off the ground!`,
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Unreal Game Development",
          text: "Unleashing the potential of Unreal Engine Technology, BitsWits create games that push the boundaries of what's possible in gaming and transport players into new worlds with breathtaking visuals and engaging gameplay. Let your imagination run wild with the one-of-a-kind gaming studio, BitsWits!!!",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "AR Game Development",
          text: "BitsWits helps you unlock a world of dazzling possibilities and experience the ultimate gaming entertainment with its sheer expertise in building AR games. With cutting-edge technologies such as 3D scanning, game engine creation, and cloud-based storage, we provide innovative solutions built to stand the test of time!",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "MR Game Development",
          text: "BitsWits create technology-advanced MR games using the latest 3D graphics, motion capture systems, and robust gaming engines. From intense battles, realistic racing simulators, exciting open-world exploration, and highly interactive first-person shooters to interactive puzzles, there is nothing our gaming maestros don't excel at. Time to leave your gamers gasping for more; after all, this is what we always ensure!",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "Cross-platform Game Development",
          text: `BitsWits capitalizes on the latest technologies to develop games that look and run seamlessly on all devices and gadgets. We share the experience in a slew of genres, i.e., casual, RPG, FPS, and more. Hire us to get a game that serves as the ticket to reaching a global audience!`,
          appclass: "app6",
          imgservice: react,
        },
        {
          title: "Buildbox Game Development",
          text: "BitsWits cashes in on the Buildbox platform and creates beautiful 3D worlds, physics-based levels, mind-bending puzzles, heart-pumping action games, side-scrolling runners, and whatnot. Tap into the power of this ground-breaking space with our world-class game developers, and let your rivals be knocked out of the competition!",
          appclass: "app7",
          imgservice: reactnative,
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
        assignClass="gameApp"
        subtitle="AWARDED #1 GAME APP DEVELOPMENT COMPANY"
        title={
          <>
            Experience The Roller Coaster Of <br /> The Gaming World With Us!
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSlider />
      <LpForm
        addresClass="iosclass"
        heading={`Welcome to Bitswits, your gateway to exceptional gaming experiences! As a premier game development company, we specialize in turning imaginative concepts into stunning gaming experiences. Our team of mobile game developers is not just skilled; they're innovators dedicated to pushing the boundaries of what games can be. With our renowned game development services, we offer more than development; we offer a partnership focused on elevating your game to an art form. Choose Bitswits to bring your gaming vision to life and captivate players worldwide.`}
      />
      <Nothing Nothing="nothingLp6" />
      <ServiceGenre
        addClass="gameApp"
        subTitle="OUR SERVICES ARE WHERE INNOVATION MEETS PLAY"
        title="What Genre Of Games Do We Create?"
        sections={[
          {
            title: <> 2D Game Development </>,
            text: "Bitswits, a premier 2D game development company, transforms your vision into captivating 2D games. Specializing in comprehensive 2D game development services, we craft everything from pixel art to immersive RPGs. Trust us to bring your 2D game dreams to life with precision and creativity. Start your journey with us today.",
            gameicon: gameicon1,
          },
          {
            title: <> 3D Game Development </>,
            text: "Enter a new era of gaming with Bitswits, your trusted 3D game development company. Our 3D game development services focus on creating rich, interactive worlds that enthrall and engage. With a team of skilled 3D game developers, we're dedicated to pushing boundaries and bringing your most ambitious projects to life—partner with us for unparalleled 3D experiences that captivate from every angle.",
            gameicon: gameicon2,
          },
          {
            title: <> NFT Game Development </>,
            text: "BitsWits is an NFT game development company that offers innovative and secure NFT game development services for players who want more control over their gaming assets. Our team of skilled NFT game developers leverages the power of DLT to create high-quality, secure code that offers seamless UI with minimal latency.  Give us a try today!",
            gameicon: gameicon3,
          },
        ]}
      />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="gameApp"
          subtitle="The Work We Undertake"
          title0={
            <>

              The Genres Of <span className="">Games</span> We Develop
            </>
          }
          text={
            <>

              We are famous for creating immersive game experiences with
              engaging storylines, stunning visuals, and innovative gameplay
              mechanics. <br />
              Here's an exciting rundown of what we bring to the table.
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>

                  Unity 3D <br /> Games
                </>
              ),
              text: (
                <>

                  We work with Unity 3D technology to foster unforgettable
                  gaming experiences that push the boundaries of what's
                  possible. Whether you want an action-packed shooter or a more
                  peaceful puzzle title, we can ensure your game is a success
                  and tends to become a revenue-generating machine!
                </>
              ),
              appclass: "app",
            },
            {
              title: (
                <>

                  Virtual Reality <br /> Games
                </>
              ),
              text: (
                <>

                  Producing immersive and mind-blowing virtual reality
                  experiences for gamers and businesses alike. Our games are
                  designed with the player's experience in mind and feature
                  intuitive controls, immersive soundscapes, and realistic
                  visuals that transport players into another world. Get ready
                  to hook your gamers and urge them to return for more!
                </>
              ),
              appclass: "app1",
            },
            {
              title: (
                <>

                  3D Game <br /> Development
                </>
              ),
              text: (
                <>

                  BitsWits masters the art of creating stunning 3D games,
                  harnessing the power of cutting-edge technology and
                  state-of-the-art tools. We know that a successful 3D game
                  requires more than just great visuals – it's also about a
                  compelling gameplay experience. Hence, we ensure games that
                  are balanced, entertaining, and mesmerizing for players of all
                  ages! Believe it or not, we are the perfect place to get your
                  next gaming project off the ground!
                </>
              ),
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Unreal Game Development",
              text: "Unleashing the potential of Unreal Engine Technology, BitsWits create games that push the boundaries of what's possible in gaming and transport players into new worlds with breathtaking visuals and engaging gameplay. Let your imagination run wild with the one-of-a-kind gaming studio, BitsWits!!!",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "AR Game Development",
              text: "BitsWits helps you unlock a world of dazzling possibilities and experience the ultimate gaming entertainment with its sheer expertise in building AR games. With cutting-edge technologies such as 3D scanning, game engine creation, and cloud-based storage, we provide innovative solutions built to stand the test of time!",
              appclass: "app4",
            },
            {
              title: "MR Game Development",
              text: "BitsWits create technology-advanced MR games using the latest 3D graphics, motion capture systems, and robust gaming engines. From intense battles, realistic racing simulators, exciting open-world exploration, and highly interactive first-person shooters to interactive puzzles, there is nothing our gaming maestros don't excel at. Time to leave your gamers gasping for more; after all, this is what we always ensure!",
              appclass: "app5",
            },
          ]}
          appContent4={[
            {
              title: "Cross-platform Game Development",
              text: (
                <>
                  BitsWits capitalizes on the latest technologies to develop
                  games that look and run seamlessly
                  <br className="d-lg-block d-none" /> on all devices and
                  gadgets. We share the experience in a slew of genres, i.e.,
                  casual, RPG, FPS,
                  <br className="d-lg-block d-none" /> and more. Hire us to get
                  a game that serves as the ticket to reaching a global
                  audience!
                </>
              ),
              appclass: "app03",
            },
          ]}
          appContent5={[
            {
              title: "Buildbox Game Development",
              text: "BitsWits cashes in on the Buildbox platform and creates beautiful 3D worlds, physics-based levels, mind-bending puzzles, heart-pumping action games, side-scrolling runners, and whatnot. Tap into the power of this ground-breaking space with our world-class game developers, and let your rivals be knocked out of the competition!",
              appclass: "app04",
            },
          ]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <ServicesAdvantage
        assignClass="gameApp"
        subTitle={<> Bullet-Proof Game </>}
        title={<> Development Action Plan </>}
        title1="Ideation"
        content1="We get our creative juices flowing by brainstorming ideas and concepts for your game. We work together to figure out what kind of game you want to create, the story behind it, and how you want players to interact with it."
        title2="Testing"
        content2="Before launching your game, we ensure it works properly by testing it thoroughly. This includes running the game on different platforms and devices to ensure everything runs smoothly."
        title3="Design"
        content3="We create a blueprint for your new game. This follows through designing all elements, from characters and levels to user interface features and environment settings. We ponder how each part fits together to work well in harmony."
        title4="Finalization"
        content4={
          <>
            Once we have tested your game, it's time to finalize by adding any
            last-minute features or tweaks we think are necessary. Also, now's
            the perfect time to start marketing your game! Let's get people
            excited about it before launch day, so they can't wait to play.
          </>
        }
        title5="Development"
        content5="The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed."
        title6="Launch"
        content6={
          <>
            Now that your game is finished and tested, it's time to let the
            world know about it. Finally, launch your game and watch as people
            flock to play it!
          </>
        }
        AdvantageOne={AdvantageOne}
        css={styles.maxWidth}
      />
      <ServiceTarget
        addClass="gameApp"
        subTitle="Features Of Our Development Endeavors"
        title={
          <>
            Invigorate Your Target Audience <br /> With Dynamic Gameplay
          </>
        }
        text={
          <>
            It's time to develop compelling storylines and rich characters with
            BitsWits; after all, don't you want to create an immersive
            experience? <br></br> We use the latest technologies and
            cutting-edge visuals to enable players to interact intuitively,
            whether playing on a PC, console, or mobile device.
          </>
        }
        heading1="We Ideate, Design, and Construct Expressive Games!!!"
        content1="BitsWits bring your visions into gaming reality following a structured and mindful approach. Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game's structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!"
        heading2="We Design Flawless, Captivating User Interfaces And Experiences!!!"
        content2="BitsWits shares a renowned name in developing top-class UI/UX processes that glues gamers to the screen for stretched hours. Our in-depth analysis of user behavior helps us create the perfect interface for each game, ensuring that no two experiences are the same. Our industry-trained game developers develop UI/UX optimized for maximum engagement and satiation."
        heading3="We Utilize Cutting-Edge Mobile Gaming Technologies!!!"
        content3="BitsWits collar the intricacies of mobile gaming technology and help develop a strategy for success. We use cutting-edge software, languages, and frameworks; you can enjoy superior graphics and sound that bring every battle, mission, or quest to life. Our innovative network protocols will keep your game running smoothly with low latency and excellent responsiveness."
      />
      <ServiceSolutions
        addClass="gameApp"
        title="Leverage Our Proficiency in Mobile Game Development Today"
        text="Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy."
        Solution={Solution}
      />
      <ServiceEngage
        subTitle="HIRE THE BEST; FORGET THE REST!"
        title="Why Engage BitsWits As Your Game Development Studio?"
        main={main}
        heading1="Unpaired Expertise"
        text1="Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy."
        engIcon1={engIcon1}
        heading2="Tabs On Latest Trends"
        text2="We are passionate about gaming and strive to stay up-to-date on the latest trends in the industry. We are equipped with the necessary tools, knowledge, and skills to create an engaging video game experience."
        engIcon2={engIcon2}
        heading3="Creative Solutions"
        text3="BitsWits offers innovative solutions tailored to your specific needs and marketing objectives. Whether you're looking to create a game that educates, entertains, or helps you earn a steady stream of revenue, our team can craft the perfect experience to meet your needs."
        engIcon3={engIcon3}
        heading4="Prices That Make Sense"
        text4="We offer competitive prices for our services, meaning you get a great game at an even better price. Plus, if you're not 100% satisfied with the final product, we offer a full refund so you can be sure that your money is being well spent. There is one thing for sure at BitsWits, your hard-earned money won't go down the drain."
        engIcon4={engIcon4}
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
      <TechnologiesGames
        title={<>  Game Development </>}
        platforms={[
          { icon: techIcon1, label: 'HTML 5' },
          { icon: techIcon2, label: 'Unity' },
          { icon: techIcon3, label: 'Unreal Engine' },
          { icon: techIcon4, label: 'Photon' },
          { icon: techIcon5, label: 'Cocos 2D' },
          { icon: techIcon6, label: 'Smartfox Server' },
        ]}
      />
      <Justbuildit />
      <Globallp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={
          [
            {
              question: "What is Game Application Development?",
              answer:
                (<> Game application development is the process of creating interactive digital games for various platforms, such as mobile devices, desktop computers, consoles, and web browsers. </>),
            },
            {
              question: "What Programming Languages are commonly used for Game Development?",
              answer:
                (<> Some common programming languages for game development include C++, C#, Java, Python, and JavaScript. The choice of language often depends on the platform and game engine being used. </>),
            },
            {
              question: "What is a Game Engine?",
              answer:
                (<> A game engine is a software framework that provides tools, libraries, and functionalities to streamline the game development process. It includes features for rendering graphics, handling physics, managing assets, and more. </>),
            },
            {
              question: "What are the main platforms for which games are developed?",
              answer:
                (<> Games can be developed for a variety of platforms, including:<br /><br />
                  Mobile: iOS (Apple), Android (Google)<br /><br />
                  Desktop: Windows, macOS, Linux<br /><br />
                  Consoles: PlayStation, Xbox, Nintendo Switch<br /><br />
                  Web: Browser-based games using HTML5 and JavaScript </>),
            },
            {
              question: "What are the steps involved in game development?",
              answer:
                (<> Game development typically involves the following steps:<br /><br />
                  Conceptualization and Design: Planning the game's concept, story, mechanics, and visual design.<br /><br />
                  Development: Writing code, creating assets, and implementing features using a chosen game engine.<br /><br />
                  Testing: Thoroughly testing the game to identify and fix bugs, optimize performance, and ensure a smooth player experience.<br /><br />
                  Deployment and Distribution: Preparing the game for release on specific platforms or app stores.<br /><br />
                  Marketing and Launch: Promoting the game, generating buzz, and launching it to the target audience.<br /><br />
                  Post-Launch Support: Providing updates, addressing user feedback, and maintaining the game's community. </>),
            },
            {
              question: "What are some popular game engines for development?",
              answer:
                (<> Some popular game engines include Unity (supports both 2D and 3D development), Unreal Engine (known for high-quality graphics and 3D capabilities), Godot (open-source and versatile), and Phaser (for 2D web games). </>),
            },
          ]
        }
      />
      <HomeLocation />

      <Script id="websiteSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Game Application Development Company",
            "url": "https://www.bitswits.co/game-application-development",
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
            "url": "https://www.bitswits.co/game-application-development",
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
            "name": "Game Application Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgameappbanner.c0534db1.png&w=1200&q=75",
            "url": "https://www.bitswits.co/game-application-development",
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
            "name": "Game Application Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgameappbanner.c0534db1.png&w=1200&q=75",
            "description": "Welcome to Bitswits, your gateway to exceptional gaming experiences! As a premier game development company, we specialize in turning imaginative concepts into stunning gaming experiences. Our team of mobile game developers is not just skilled; they're innovators dedicated to pushing the boundaries of what games can be. With our renowned game development services, we offer more than development; we offer a partnership focused on elevating your game to an art form. Choose Bitswits to bring your gaming vision to life and captivate players worldwide.",
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
