"use client"
import React, { useState, useEffect } from "react";
import Script from "next/script";
//components
import ServicesBanner from "../../components/ServicesBanner";
import ServicesAdvantage from "../../components/ServicesAdvantage";
import ServiceTarget from "../../components/ServiceTarget";
import ServicesMaintain from "../../components/ServicesMaintain";
import ServiceExperience from "../../components/ServiceExperience";
import ServiceSolutions from "../../components/ServiceSolutions";
import ServiceGenre from "../../components/ServiceGenre";
import Capabilities3d from "../../components/3dCapabilities";
import ServiceEngage from "../../components/ServiceEngage";
import Newsuccess from "../../components/NewMblSuccess";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Formnewlp from "../../components/Formnewlp";
import Globallp6 from "../../components/GlobalLp6";
import HomeBannerSlider from "../../components/HomeBannerSliderlp";
import Justbuildit from "../../components/Justbuildit";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm";
import TechnologiesGames from "../../components/TechnologiesGames";
import Nothing from "../../components/Nothing";
import Partnerships from "../../components/Partnerships";
import People from "../../components/People";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/3d-game-development/images/bannerImage.png";
import AdvantageOne from "/public/3d-game-development/images/advantage1.png";
import Solution from "/public/3d-game-development/images/solution.png";
import gameicon1 from "/public/3d-game-development/images/gameicon1.png";
import gameicon2 from "/public/3d-game-development/images/gameicon2.png";
import gameicon3 from "/public/3d-game-development/images/gameicon3.png";
import main from "/public/3d-game-development/images/engagemain.png";
import engIcon1 from "/public/3d-game-development/images/engage1.png";
import engIcon2 from "/public/3d-game-development/images/engage2.png";
import engIcon3 from "/public/3d-game-development/images/engage3.png";
import engIcon4 from "/public/3d-game-development/images/engage4.png";
import customios from "/public/3dapp/3dgameconceptart.png";
import iphoneapp from "/public/3dapp/3dwebandappdevelopment.png";
import applewatch from "/public/3dapp/advanced3dvideos.png";
import appletvappdevelopment from "/public/3dapp/3dgameappintegration.png";
import iphoneappdesigning from "/public/3dapp/3dimaginingart.png";
import hybridiphone from "/public/3dapp/supportandmaintenance.png";
import techIcon1 from "/public/gametech/2d/icon1.png";
import techIcon2 from "/public/gametech/2d/icon2.png";


const mobileApplication = () => {

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
        Here's an exciting rundown of what we bring to the table.`

      },
      serdata: [

        {
          title: (<>3D Game Concept Art </>),
          text: "Our design and 3D game development team have extensive experience crafting vibrant and immersive artwork for various gaming applications. From characters and environmental designs to UI/UX, we can help define the visual identity of any game.",
          appclass: "app",
          appclass: "app1",
          imgservice: customios,
        },
        {
          title: (<> 3D Web and App Development </>),
          text: 'BitsWits offers world-class solutions for both web and mobile platforms. We specialized in creating stunning 3D apps with modern technologies such as Augmented Reality, Virtual Reality, 3D Modeling and Animation, WebGL, HTML5/CSS3, etc.',
          appclass: "app2",
          imgservice: iphoneapp,
        },
        {
          title: 'Advanced 3D Videos',
          text: "With our state-of-the-art technology, we can turn your ideas into fully rendered 3D game videos with stunning visuals. Our services range from custom-created 3D game videos to motion capture animation.",
          appclass: "app3",
          imgservice: applewatch,
        },
        {
          title: "3D Game App Integration",
          text: "BitsWits allow you to quickly and easily add 3D gaming experiences to your existing apps so that you can play high-end games without extra coding or hardware configurations. With our services, you can also easily and quickly integrate a virtual reality (VR) or augmented reality (AR) game into your project.",
          appclass: "app4",
          imgservice: appletvappdevelopment,
        },
        {
          title: "3D Imagining Art",
          text: "Our team of experienced 3D artists and engineers can turn your ideas into reality with stunning visuals that will wow your players. We specialize in creating engaging worlds with realistic landscapes, characters, and environments.",
          appclass: "app5",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Support and Maintenance",
          text: "BitsWits recognizes that the game development journey doesn't end with its launch. That's why we provide our clients with comprehensive support and maintenance services to ensure their games remain attractive, immersive, and up-to-date with the latest trends.",
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
        assignClass="game3d"
        subtitle="AWARDED #1 GAME APP DEVELOPMENT COMPANY"
        title={
          <>
            Experience The Roller Coaster Of <br /> The Gaming World With Us!
          </>
        }
        text={
          <>
            We deliver great results, on time and on budget. Contact us to start
            talking about your project today!
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSlider />
      <LpForm />
      <Nothing Nothing="nothingLp6" />
      <ServicesAdvantage
        subTitle="Bounties"
        title={
          <> Attractive/Creative Opportunities 3D Game Development Offers </>
        }
        title1="More Control Options"
        content1="It enables the 3D game developer to provide gamers with more control options, such as the ability to customize their gaming experience by adjusting settings or controlling multiple characters."
        title2="Increased Reach"
        content2="3D games can be developed with a broader range of devices in mind, appealing to an increasingly global audience and expanding the potential customer base for businesses."
        title3="Increased Customer Loyalty"
        content3="With 3D game development, businesses can create entertaining and engaging games, creating a sense of loyalty amongst prospects that may result in repeat customers and long-term fans of the business."
        title4="Scalability"
        content4="3D games are incredibly scalable, allowing firms to add or remove the content as needed, depending on the customer base. This makes it easy for businesses to adjust their games to cater to different markets or demographics."
        title5="Enhanced Visualization"
        content5="The enhanced graphics, lighting, physics, and rendering capabilities of 3D game development create an interactive, immersive, and captivating environment for gaming enthusiasts."
        title6="Increased Realism"
        content6="It allows game developers to create a realistic world for gamers to explore. The improved graphics and rendering capabilities of 3D engines make the game look more pragmatic and believable."
        AdvantageOne={AdvantageOne}
      />
      <ServiceTarget
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
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="game3d"
          subtitle="The Work We Undertake"
          title0={
            <>

              The Genres Of <span>Games</span> We Develop
            </>
          }
          text={
            <>

              We are famous for creating immersive game experiences with engaging
              storylines, stunning visuals, and innovative gameplay mechanics.
              <br />
              Here's an exciting rundown of what we bring to the table.
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>

                  3D Game <br /> Concept Art
                </>
              ),
              text: "Our design and 3D game development team have extensive experience crafting vibrant and immersive artwork for various gaming applications. From characters and environmental designs to UI/UX, we can help define the visual identity of any game.",
              appclass: "app",
            },
            {
              title: (
                <>

                  3D Web and App <br /> Development
                </>
              ),
              text: "BitsWits offers world-class solutions for both web and mobile platforms. We specialized in creating stunning 3D apps with modern technologies such as Augmented Reality, Virtual Reality, 3D Modeling and Animation, WebGL, HTML5/CSS3, etc.",
              appclass: "app1",
            },
            {
              title: (
                <>

                  Advanced <br /> 3D Videos
                </>
              ),
              text: "With our state-of-the-art technology, we can turn your ideas into fully rendered 3D game videos with stunning visuals. Our services range from custom-created 3D game videos to motion capture animation.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "3D Game App Integration",
              text: "BitsWits allow you to quickly and easily add 3D gaming experiences to your existing apps so that you can play high-end games without extra coding or hardware configurations. With our services, you can also easily and quickly integrate a virtual reality (VR) or augmented reality (AR) game into your project.",
              appclass: "app3",
            },
          ]}
          appContent3={[]}
          appContent4={[
            {
              title: "3D Imagining Art",
              text: "Our team of experienced 3D artists and engineers can turn your ideas into reality with stunning visuals that will wow your players. We specialize in creating engaging worlds with realistic landscapes, characters, and environments.",
              appclass: "app03",
            },
          ]}
          appContent5={[
            {
              title: "Support and Maintenance",
              text: "BitsWits recognizes that the game development journey doesn't end with its launch. That's why we provide our clients with comprehensive support and maintenance services to ensure their games remain attractive, immersive, and up-to-date with the latest trends.",
              appclass: "app04",
            },
          ]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <LpChoose transform="transform" />
      <ServiceExperience />
      <ServiceSolutions
        addClass="game3d"
        title="Create Engaging Worlds with Our 3D Game Development Studio!"
        text="BitsWits creates highly interactive and immersive 3D games that take players on an unforgettable journey into a thrilling world of realism. Our services feature designing complex characters, environments, objects, and textures, animating scenes, creating realistic physics for game objects to interact with each other, and integrating user controls and interfaces. From designing and developing 3D models to producing and integrating game logic, we provide end-to-end solutions for creating cutting-edge gaming experiences."
        Solution={Solution}
      />
      <ServiceGenre
        addClass="game3d"
        subTitle="OUR SERVICES ARE WHERE INNOVATION MEETS PLAY"
        title="What Genre Of Games Do We Create?"
        sections={[
          {
            title: <> 2D Games In Unity </>,
            text: "BitsWits ensure your vision is realized in an exciting, compelling 2D form from concept to completion. We specialize in pixel art and animations, level designs, scripting and effects, UI/UX design, audio production, and integration. Whether a simple arcade game, a complex platformer, puzzle-solving adventures, or an adventure-filled RPG, our team can design and develop the perfect game for you. Contact us today to bring your ideas to tangible reality!!!",
            gameicon: gameicon1,
          },
          {
            title: <> 3D Games In Unity </>,
            text: "At BitsWits, we help you build 3D games that captivate your audience. Our experienced developers share an in-depth understanding of the latest technologies and techniques, i.e., Maya, 3ds Max, and whatnot, to ensure games that look and play like no other. By incorporating rendering techniques and advanced physics into each game, we simply help your project succeed in the fierce gaming competition! Connect with us to roll out a game never played before!",
            gameicon: gameicon2,
          },
          {
            title: <> 3D Mobile Games </>,
            text: "BitsWits proudly shares its ability to create innovative and secure NFT games that give players control over their gaming assets, allowing them to be creative and have more ownership of the content they create in-game. By leveraging the power of DLT, we commit to high-quality, secure code that offers seamless UI with minimal latency. We disrupt every genre with our creative potential, from action, adventure, and strategy to simulations. Give us a try, and let us help you enter the crypto sphere with confidence!!!",
            gameicon: gameicon3,
          },
        ]}
      />
      <Capabilities3d />
      <ServiceEngage
        subTitle="HIRE THE BEST; FORGET THE REST!"
        title="Why Engage BitsWits As Your Game Development Studio?"
        main={main}
        heading1="Skilled Team"
        text1="BitsWits celebrates a team of experienced game developers and designers with the necessary skills and knowledge to create engaging, highly-converting 3D games. Our developers always keep an eye on innovation and creativity."
        engIcon1={engIcon1}
        heading2="Quality Graphics"
        text2="BitsWits is committed to providing its clients with high-quality 3D graphics that capture the attention of players, making the gaming experience even more immersive."
        engIcon2={engIcon2}
        heading3="Cutting Edge Technology"
        text3="The developers at BitsWits are always looking to stay ahead of the curve when it comes to using innovative technology in their 3D games. They utilize the latest technologies and tools to ensure top-quality 3D games with immersive graphics, engaging gameplay, and high performance."
        engIcon3={engIcon3}
        heading4="Quality Assurance"
        text4="BitsWits employs a rigorous quality assurance process to ensure that every game created meets the highest standards of excellence. This helps to guarantee an exciting and bug-free gaming experience for all players."
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
        title={<>  3D Game Development </>}
        platforms={[
          { icon: techIcon1, label: 'python' },
          { icon: techIcon2, label: 'Unity' }
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
              question: "What is 3D game development?",
              answer:
                (<> 3D game development involves creating interactive games that exist within a three-dimensional space, allowing for depth and perspective in gameplay. It uses 3D models, textures, and animations to create realistic environments and characters. </>),
            },
            {
              question: "What programming languages are commonly used for 3D game development?",
              answer:
                (<> Commonly used programming languages for 3D game development include C++, C#, Python, and Java. Game engines like Unity and Unreal Engine provide support for these languages and streamline the development process. </>),
            },
            {
              question: "What are some popular tools and engines for 3D game development?",
              answer:
                (<> 1. Popular tools and engines for 3D game development include:Unity <br /><br />
                  2. Unreal Engine <br /><br />
                  3. Blender (for 3D modeling and animation) <br /><br />
                  4. Autodesk Maya (for 3D modeling and animation) <br /><br />
                  5. 3ds Max (for 3D modeling and animation) <br /><br />
                  ZBrush (for sculpting and texturing) </>),
            },
            {
              question: "How do I handle 3D modeling and animation in game development?",
              answer:
                (<> 3D modeling involves creating the objects, characters, and environments in the game, while animation involves giving movement and behavior to those models. This is typically done using specialized software tools like Blender, Maya, or 3ds Max. </>),
            },
            {
              question: "What is the process for implementing physics in a 3D game?",
              answer:
                (<> Physics in 3D games involves simulating real-world physical interactions, such as gravity, collisions, and forces. Game engines like Unity and Unreal Engine provide built-in physics engines that handle these interactions, allowing developers to define properties and behaviors for game objects. </>),
            },
            {
              question: "What are some important considerations for optimizing performance in 3D games?",
              answer:
                (<> 1. Optimizing performance in 3D games is crucial for smooth gameplay. Considerations include:Level of Detail (LOD): Use lower-polygon models for objects that are farther away from the camera.<br /><br />
                  2. Occlusion Culling: Hide objects that are not currently visible to the camera.<br /><br />
                  3. Texture Compression: Use compressed textures to save memory and improve loading times.<br /><br />
                  Efficient Rendering: Utilize techniques like frustum culling to only render objects within the camera's view. </>),
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
                      "name": "3D Games Development Company",
                      "url": "https://www.bitswits.co/3d-game-development-company",
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
                      "url": "https://www.bitswits.co/3d-game-development-company",
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
                      "name": "3D Games Development Company",
                      "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbannerImage.6e414021.png&w=1920&q=75",
                      "url": "https://www.bitswits.co/3d-game-development-company",
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
            "name": "3D Games Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbannerImage.6e414021.png&w=1920&q=75",
            "description": "We focus on creating on-demand 3D gameplay environments, utilizing cutting-edge technologies to bring a range of virtual worlds to life. We make it happen, whether it be an action-packed first-person shooter, a thrilling online multiplayer game, or a captivating puzzle game. The cornerstone of our services caters to realistic 3D character models, dynamic lighting and shadow effects, physics-based animations, realistic particle systems, and dynamic weather effects.",
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
};

export default mobileApplication;
