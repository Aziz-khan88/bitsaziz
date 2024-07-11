"use client"
import React, { useState, useEffect } from "react";
import Script from "next/script";
//components
import Formnewlp from "../../components/Formnewlp";
import Globallp6 from "../../components/GlobalLp6";
import HomeBannerSlider from "../../components/HomeBannerSliderlp";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm";
import TechnologiesGames from "../../components/TechnologiesGames";
import Nothing from "../../components/Nothing";
import Partnerships from "../../components/Partnerships";
import People from "../../components/People";
import ServicesBanner from "../../components/ServicesBanner";
import ServicesAdvantage from "../../components/ServicesAdvantage";
import ServicesMaintain from "../../components/ServicesMaintain";
import ServiceSolutions from "../../components/ServiceSolutions";
import ServiceGenre from "../../components/ServiceGenre";
import Capabilities2d from "../../components/Capabilities2d";
import ServiceEngage from "../../components/ServiceEngage";
import Newsuccess from "../../components/NewMblSuccess";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Justbuildit from "../../components/Justbuildit";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/images/game2dbanner/bann.png";
import AdvantageOne from "/public/newHomePageImages/run.png";
import Solution from "/public/newHomePageImages/ply2.png";
import gameicon1 from "/public/gameicon/ios2d.png";
import gameicon2 from "/public/gameicon/andriodgame.png";
import gameicon3 from "/public/gameicon/cons.png";
import main from "/public/shark/don.png";
import engIcon1 from "/public/shark/2d-shark1.png";
import engIcon2 from "/public/shark/2d-shark2.png";
import engIcon3 from "/public/shark/2d-shark3.png";
import engIcon4 from "/public/shark/2d-shark4.png";
import customios from "/public/2dgame/2dconceptartanddesign.png";
import iphoneapp from "/public/2dgame/singleplayergames.png";
import applewatch from "/public/2dgame/gameappintegration.png";
import appletvappdevelopment from "/public/2dgame/multiplayergames.png";
import iphoneappdesigning from "/public/2dgame/uigraphics.png";
import hybridiphone from "/public/2dgame/storyboarding.png";
//
import techIcon1 from "/public/gametech/2d/icon1.png";
import techIcon2 from "/public/gametech/2d/icon2.png";
import techIcon3 from "/public/gametech/2d/icon3.png";
import techIcon4 from "/public/gametech/2d/icon4.png";
import techIcon5 from "/public/gametech/2d/icon5.png";
import techIcon6 from "/public/gametech/2d/icon6.png";
import techIcon7 from "/public/gametech/2d/icon7.png";
import techIcon8 from "/public/gametech/2d/icon8.png";
import techIcon9 from "/public/gametech/2d/icon9.png";
import techIcon10 from "/public/gametech/2d/icon10.png";
import techIcon11 from "/public/gametech/2d/icon11.png";
import techIcon12 from "/public/gametech/2d/icon12.png";

export default function gamedevelopmentcompany() {
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
        subtitle: "Our Services Are Where Innovation Meets Play",
        title1: `What You May Expect When
        Committing To Us?`,
      },
      serdata: [
        {
          title: <> 2D Concept Art and Design </>,
          text: "2D Concept Art and Design is an art form that combines creative design with technical know-how. Our team of experienced artists is well-versed in various techniques, including digital painting, 3D modeling, and animation. From character concept artwork to product designs, environments, and storyboards, we provide complete professional service for our clients.",
          appclass: "app",
          appclass: "app1",
          imgservice: customios,
        },
        {
          title: <> Single Player Games</>,
          text: `Our team is well versed in various technologies such as C++,
          Unity, Unreal Engine, HTML5, and more to provide a seamless
          single-player gaming experience across different platforms.
          BitsWits guarantee bug-free code, easy navigation, intuitive
          controls, and perfect performance in our games so players can
          enjoy their experience without frustration. Whether you're
          looking for a complex 2D game or an old-school classic
          side-scroller, our 2D game developers can make it happen.`,
          appclass: "app2",
          imgservice: iphoneapp,
        },
        {
          title: "Game App Integration",
          text: `Our integration services offer a range of features across
          platforms, including multiplayer mode, leaderboard integration,
          in-app purchases, analytics, and more. Our streamlined
          integration process ensures your game runs smoothly while
          maintaining high-security standards. Whether it's connecting
          your game app with existing APIs or creating custom solutions,
          we guarantee that our solutions are robust and secure.`,
          appclass: "app3",
          imgservice: applewatch,
        },
        {
          title: "Multiplayer Games",
          text: `Whether you're looking to build a complex, engaging multiplayer game from the ground up or optimize an existing project with cutting-edge technology, we have you covered! From first-person shooters and RPGs to strategic board games and party games, we foster multiplayer gaming experiences for businesses to help them make huge bucks.`,
          appclass: "app4",
          imgservice: appletvappdevelopment,
        },
        {
          title: "UI/UX Graphics",
          text: "Our UI/UX Graphics services greatly enhance the player experience, making it more immersive and enjoyable. We focus on creating engaging visuals through color palette selection, typography choice, and iconography, as well as developing an easy-to-navigate layout to keep your players engaged with the game.",
          appclass: "app5",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Storyboarding",
          text: "With our team of expert animators, you can watch your characters come alive and see your story unfold in vivid detail. Our 2D animation and storyboard services allow you to visually represent what is happening in your script or story before it gets animated. This ensures that all elements are in place for a successful storyboard.",
          appclass: "app5",
          imgservice: hybridiphone,
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
        assignClass="game2d"
        subtitle="Best In Animation, Graphics, & Design - Your Own"
        title={<> 2D Game Development Company! </>}
        text={
          <>
            From classic platformers to immersive RPGs, our 2D games will have
            your target market addicted in no time. We specialize in crafting
            highly detailed and interactive worlds, characters, and stories that
            will capture your imagination and keep your prospects hooked for
            hours on end.
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSlider />
      <LpForm />
      <Nothing Nothing="nothingLp6" />
      <ServicesAdvantage
        assignClass="game2d"
        title={
          <> Attractive/Creative Opportunities 2D Game Development Offers </>
        }
        title1="Improved Engagement"
        content1="Since 2D games typically feature minimal graphics and fewer special effects, players with slow internet connections or limited hardware capabilities can easily enjoy them."
        title2="Enhanced Engagement"
        content2="With 2D games, businesses can amuse their customers with fun and interactive activities that keep them inquisitive about the products or services offered."
        title3="Quicker To Develop"
        content3="Due to the simpler coding process and fewer assets needed, 2D games can be developed in a shorter amount of time than 3D games."
        title4="Cost-Effective"
        content4="Developing games in 2D is a cost-effective way to produce top-notch quality games with minimal overhead costs."
        title5="Accessible For All Players"
        content5="The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed."
        title6="Easier Maintenance"
        content6={
          <>
            Since 2D games can be updated without major overhauls, businesses
            don't have to worry about the constant maintenance and bug fixes of
            2D game development. This allows for faster iteration cycles and
            easier deployment of new content.
          </>
        }
        AdvantageOne={AdvantageOne}
      />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="game2d"
          subtitle="Our Services Are Where Innovation Meets Play"
          title0={
            <>

              What You May Expect When <br /> Committing To Us?
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: <> 2D Concept <br /> Art and Design </>,
              text: "2D Concept Art and Design is an art form that combines creative design with technical know-how. Our team of experienced artists is well-versed in various techniques, including digital painting, 3D modeling, and animation. From character concept artwork to product designs, environments, and storyboards, we provide complete professional service for our clients.",
              appclass: "app",
            },
            {
              title: (
                <> Single Player <br /> Games </>
              ),
              text: (
                <>

                  Our team is well versed in various technologies such as C++,
                  Unity, Unreal Engine, HTML5, and more to provide a seamless
                  single-player gaming experience across different platforms.
                  BitsWits guarantee bug-free code, easy navigation, intuitive
                  controls, and perfect performance in our games so players can
                  enjoy their experience without frustration. Whether you're
                  looking for a complex 2D game or an old-school classic
                  side-scroller, our 2D game developers can make it happen.
                </>
              ),
              appclass: "app1",
            },
            {
              title: (
                <> Game App <br /> Integration </>
              ),
              text: (
                <>

                  Our integration services offer a range of features across
                  platforms, including multiplayer mode, leaderboard
                  integration, in-app purchases, analytics, and more. Our
                  streamlined integration process ensures your game runs
                  smoothly while maintaining high-security standards. Whether
                  it's connecting your game app with existing APIs or creating
                  custom solutions, we guarantee that our solutions are robust
                  and secure.
                </>
              ),
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Multiplayer Games",
              text: "Whether you're looking to build a complex, engaging multiplayer game from the ground up or optimize an existing project with cutting-edge technology, we have you covered! From first-person shooters and RPGs to strategic board games and party games, we foster multiplayer gaming experiences for businesses to help them make huge bucks.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "UI/UX Graphics",
              text: "Our UI/UX Graphics services greatly enhance the player experience, making it more immersive and enjoyable. We focus on creating engaging visuals through color palette selection, typography choice, and iconography, as well as developing an easy-to-navigate layout to keep your players engaged with the game.",
              appclass: "app4",
            },
            {
              title: "Storyboarding",
              text: "With our team of expert animators, you can watch your characters come alive and see your story unfold in vivid detail. Our 2D animation and storyboard services allow you to visually represent what is happening in your script or story before it gets animated. This ensures that all elements are in place for a successful storyboard.",
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
      <LpChoose transform="transform" />
      <ServiceSolutions
        addClass="game2d"
        subTitle="The Best Game Developer In Town"
        title="The Future Of 2D Games Is Here – & We're Leading The Charge!"
        text="Our 2D game developers use a combination of vibrant colors, intuitive controls, and engaging storylines to create something truly unique and always captivating. Our 2D game development services include concept creation, level design, character design, animation, asset integration, dynamic UI/UX design, programming, and debugging"
        Solution={Solution}
      />
      <ServiceGenre
        subTitle="OUR SERVICES ARE WHERE INNOVATION MEETS PLAY"
        title="What Genre Of Games Do We Create?"
        sections={[
          {
            title: <> iOS 2D <br /> Game Development </>,
            text: "We offer top-notch iOS 2D game development services that combine top-of-the-line technology and creative designs. BitsWits is a master at creating visually compelling games with captivating storylines, vibrant characters, and intense levels. From conceptualization to design and launch, our team ensures you get a complete gaming experience that stands out from the crowd.",
            gameicon: gameicon1,
          },
          {
            title: <> Android 2D <br /> Game Development </>,
            text: "BitsWits is the go-to destination for all your Android 2D game development needs. From creating solid and user-friendly architecture to stunning visuals and fast loading times, we ensure the outcome is exceptional. With our expertise in Java language and open-source platforms like Unity 2D & Unreal Engine, we provide high-end services for game development, design & testing.",
            gameicon: gameicon2,
          },
          {
            title: <> 2D Games <br /> For Consoles And PCs </>,
            text: "BitsWits provides the best 2D games for PCs and consoles. With our expansive library of titles, you can get your hands on classic console and arcade games and explore new worlds full of adventure, excitement, and challenge. We create intricate storylines with captivating characters that draw players in from start to finish. We also work closely with our partners to develop world-class titles for platforms such as Xbox, PlayStation, Nintendo Switch, and Windows PC.",
            gameicon: gameicon3,
          },
        ]}
      />
      <Capabilities2d />
      <ServiceEngage
        addClass="game2d"
        title="Compelling Reasons To Enlist Our 2D Game Development Company"
        main={main}
        heading1="Customized Solutions"
        text1="BitsWits provides tailor-made 2D games development services tailored to each client's needs and requirements. This helps create an engaging gaming experience for the user, which can be further modified according to their preferences."
        engIcon1={engIcon1}
        heading2="Innovative Solutions"
        text2="BitsWits is always looking for new and innovative ways to develop 2D games that provide a unique and immersive gaming experience. We use the latest technologies and techniques to ensure that the users enjoy the best gaming experience."
        engIcon2={engIcon2}
        heading3="Experienced Professionals"
        text3="The team at BitsWits consists of experienced professionals with years of experience in 2D game development. This ensures that the games developed are efficient and bug-free, providing a fantastic gaming experience to the users."
        engIcon3={engIcon3}
        heading4="Exclusive Client Service"
        text4="We are also proud to offer exclusive client services, including game beta testing and post-release support. We guarantee a smooth launch for your game and ensure your players have the best experience possible."
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
        title={<>  2D Game Development </>}
        platforms={[
          { icon: techIcon1, label: 'HTML 5' },
          { icon: techIcon2, label: 'Unity 2D' },
          { icon: techIcon3, label: 'Unreal Engine' },
          { icon: techIcon4, label: 'Android SDK' },
          { icon: techIcon5, label: 'CryEngine' },
          { icon: techIcon6, label: 'Game Maker Studio 2' },
          { icon: techIcon7, label: 'Corona SDK' },
          { icon: techIcon8, label: 'AppGameKit' },
          { icon: techIcon9, label: 'SpriteKit' },
          { icon: techIcon10, label: 'Godot Engine' },
          { icon: techIcon11, label: 'Cocos 2D' },
          { icon: techIcon12, label: 'Amazon Lumberyard' }
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
              question: "What is 2D game development?",
              answer:
                (<> 2D game development involves creating interactive games that exist within a two-dimensional space, with gameplay occurring on a flat plane without depth. This type of game typically uses 2D graphics and animations. </>),
            },
            {
              question: "What programming languages are commonly used for 2D game development?",
              answer:
                (<> Commonly used programming languages for 2D game development include C#, C++, Java, and Python. Game engines like Unity, Godot, and Phaser provide support for these languages and simplify the development process. </>),
            },
            {
              question: "What are some popular tools and engines for 2D game development?",
              answer:
                (<> Popular tools and engines for 2D game development include:Unity (supports both 2D and 3D game development)<br /><br />
                  Godot<br /><br />
                  Unreal Engine (can be used for 2D as well as 3D games)<br /><br />
                  Cocos2d-x<br /><br />
                  Phaser<br /><br />
                  Love2D<br /><br />
                  Pico-8 </>),
            },
            {
              question: "What is the difference between a sprite and a texture in 2D game development?",
              answer:
                (<> In 2D game development, a sprite is a 2D image or animation that represents an object or character in the game. A texture, on the other hand, is a 2D image used to apply visual details to objects, backgrounds, or surfaces in the game. </>),
            },
            {
              question: "How can I handle collision detection in 2D games?",
              answer:
                (<> Collision detection in 2D games involves identifying when two or more objects in the game world come into contact. This can be achieved through various techniques, such as bounding box collision, pixel-perfect collision, or using physics engines provided by game development frameworks. </>),
            },
            {
              question: "What are some common design considerations for 2D game development?",
              answer:
                (<> Design considerations for 2D games include:Game mechanics: Define how the game will be played and what actions are available to the player.<br /><br />
                  Art and animation: Create or acquire 2D sprites, backgrounds, and animations that fit the game's style and theme.<br /><br />
                  Level design: Plan and design the layout and challenges of game levels.<br /><br />
                  User interface (UI) design: Create menus, HUD elements, and other interface components.<br /><br />
                  Sound and music: Incorporate audio elements to enhance the gaming experience. </>),
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
                      "name": "2D Game Development Company",
                      "url": "https://www.bitswits.co/2d-game-development-company",
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
                      "url": "https://www.bitswits.co/2d-game-development-company",
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
                      "name": "2D Game Development Company",
                      "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbann.35180669.png&w=1920&q=75",
                      "url": "https://www.bitswits.co/2d-game-development-company",
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
            "name": "2D Game Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbann.35180669.png&w=1920&q=75",
            "description": "From classic platformers to immersive RPGs, our 2D games will have your target market addicted in no time. We specialize in crafting highly detailed and interactive worlds, characters, and stories that will capture your imagination and keep your prospects hooked for hours on end.",
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
