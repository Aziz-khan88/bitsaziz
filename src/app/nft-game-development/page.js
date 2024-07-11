"use client"
import Script from "next/script";
import React, { useState, useEffect } from "react";
// css
import styles from "@/styles/ServiceEngage.module.css";
import style from "@/styles/Globallp.module.css";
//components
import Formnewlp from "../../components/Formnewlp";
import Partnerships from "../../components/Partnerships";
import People from "../../components/People";
import LpForm from "../../components/LpForm";
import Nothing from "../../components/Nothing";
import LpChoose from "../../components/LpChoose";
import HomeBannerSlider from "../../components/HomeBannerSlider";
import Globallp6 from "../../components/GlobalLp6";
import ServicesBanner from "../../components/ServicesBanner";
import Justbuildit from "../../components/Justbuildit";
import ServicesAdvantage from "../../components/ServicesAdvantage";
import ServicesMaintain from "../../components/ServicesMaintain";
import ServiceSolutions from "../../components/ServiceSolutions";
import ServiceGenre from "../../components/ServiceGenre";
import Capabilitiesnft from "../../components/Capabilitiesnft";
import ServiceEngage from "../../components/ServiceEngage";
import Newsuccess from "../../components/NewMblSuccess";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/images/nft/nft.png";
import AdvantageOne from "/public/newHomePageImages/donkey.png";
import Solution from "/public/newHomePageImages/ply3.png";
import gameicon1 from "/public/gameicon/1nft.png";
import gameicon2 from "/public/gameicon/2nft.png";
import gameicon3 from "/public/gameicon/3nft.png";
import main from "/public/sharknft/don.png";
import engIcon1 from "/public/sharknft/1.png";
import engIcon2 from "/public/sharknft/2.png";
import engIcon3 from "/public/sharknft/3.png";
import engIcon4 from "/public/sharknft/4.png";
import customios from "/public/nftapp/takehomewhatyouearn.png";
import iphoneapp from "/public/nftapp/rewardingchallenges.png";
import applewatch from "/public/nftapp/strengthenyourcharacter.png";
import appletvappdevelopment from "/public/nftapp/createyourownpath.png";
import iphoneappdesigning from "/public/nftapp/diversityofgames.png";
import hybridiphone from "/public/nftapp/collectrareitems.png";
import flutter from "/public/nftapp/showoffyourskills.png";
import pythone from "/public/nftapp/makeconnections.png";
import html from "/public/nftapp/competeforrewards.png";

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
        title1: `Unlock Treasure Troves of Fun with Play-
        to-Earn NFT Games!`,
        text: `Are you ready to take your gaming experience to the next level? With play-to-earn NFT games, the possibilities are endless! Whether
        you're a hardcore collector or just looking for some extra cash, these interactive experiences can offer you something special.
        Explore the features of play-to-earn games, and get the ball rolled today!`,
      },
      serdata: [
        {
          title: "Take Home What You Earn",
          text: "Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: <> Rewarding Challenges </>,
          text: (
            <>
              {" "}
              With these NFT games, you will face rewarding challenges that test
              your abilities and allow you to earn rewards or tokens for
              completing them. It's a great way to increase your skills and
              expand your knowledge.{" "}
            </>
          ),
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: <> Strengthen Your Character </>,
          text: `These Play-to-Earn NFT games can help you develop your character
          and increase confidence. As you make progress in the game, you
          learn more about yourself and can become a better player.`,
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Create Your Own Path",
          text: "With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve!",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Diversity of Games",
          text: "A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone!",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Collect Rare Items",
          text: "Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: <> Show Off Your Skills </>,
          text: "What better way to show off your skills than playing Play-to-Earn NFT games? You can gain recognition as you progress in the game and make your mark on the gaming world.",
          appclass: "app5",
          imgservice: flutter,
        },
        {
          title: "Make Connections",
          text: ` Play-to-Earn NFT games are a great way to connect with other
          players and enjoy the gaming experience together. Connecting
          with others helps build an online community and fosters
          collaboration and friendship.`,
          appclass: "app5",
          imgservice: pythone,
        },
        {
          title: "Compete for Rewards",
          text: `Competing in these games allows you to compete for rewards or
          tokens, which can be used to purchase additional items, upgrade
          your character, and even purchase real-world products! With the
          challenge of competition comes great rewards! With Play-to-Earn
          NFT games, you can truly have it all!`,
          appclass: "app5",
          imgservice: html,
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
        assignClass="gameNft"
        title={
          <>
            World-Class Provider Of NFT Game <br /> Development Solutions!
          </>
        }
        text={
          <>
            BitsWits specializes in creating NFT games using smart contracts on
            Ethereum, EOS, Tron, and Cardano. <br /> Our team spends countless
            hours crafting unique storylines, artwork, and game mechanics that
            bring <br /> the world of NFTs to life.
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
        title={<> Discover A World Of Possibilities! </>}
        title1="Unique Ownership"
        content1="NFT game development allows digital assets, such as artwork and collectibles, to be securely owned with a unique, blockchain-based identifier. This enables users to own digital assets without being replicated or copied by other players."
        title2="Enhanced Interactivity"
        content2="With NFT game development, players can interact directly with other players in various ways, from trading collectibles to participating in tournaments or competitions."
        title3="New Revenue Streams"
        content3="Developers can create new ways for players to monetize their experiences, such as selling in-game items or running virtual markets with rare items. This opens up a whole new range of potential sources of income for players."
        title4="Increased Immersion"
        content4="By leveraging the power of blockchain technology, NFT game development can provide an immersive gaming experience by allowing developers to create real-world objects and experiences within the game world."
        title5="Digital Authenticity"
        content5="By using an immutable ledger, NFTs provide an unparalleled level of digital authenticity, ensuring that users can verify the ownership and provenance of their digital assets."
        title6="Open-Source Platforms"
        content6={
          <>
            Many NFT game development platforms are open source, meaning players
            can help shape their games and contribute to their development. This
            allows for greater experimentation and creativity, resulting in a
            more engaging experience for players.
          </>
        }
        AdvantageOne={AdvantageOne}
      />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="gameNft"
          title0={
            <>
              Unlock Treasure Troves of Fun with Play-
              <br />
              to-Earn <span className="">NFT Games!</span>
            </>
          }
          text={
            <>
              Are you ready to take your gaming experience to the next level?
              With play-to-earn NFT games, the possibilities are endless!
              Whether
              <br /> you're a hardcore collector or just looking for some extra
              cash, these interactive experiences can offer you something
              special.
              <br /> Explore the features of play-to-earn games, and get the
              ball rolled today!
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>
                  Take Home <br /> What You Earn
                </>
              ),
              text: "Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!",
              appclass: "app",
            },
            {
              title: (
                <>
                  Rewarding <br /> Challenges
                </>
              ),
              text: (
                <>
                  With these NFT games, you will face rewarding challenges that
                  test your abilities and allow you to earn rewards or tokens
                  for completing them. It's a great way to increase your skills
                  and expand your knowledge.
                </>
              ),
              appclass: "app1",
            },
            {
              title: (
                <>
                  Strengthen Your <br /> Character
                </>
              ),
              text: (
                <>
                  These Play-to-Earn NFT games can help you develop your
                  character and increase confidence. As you make progress in the
                  game, you learn more about yourself and can become a better
                  player.
                </>
              ),
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Create Your Own Path",
              text: "With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve!",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "Diversity of Games",
              text: "A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone!",
              appclass: "app4",
            },
            {
              title: "Collect Rare Items",
              text: "Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique.",
              appclass: "app5",
            },
          ]}
          appContent4={[]}
          appContent5={[]}
          appContent6={[
            {
              title: <> Show Off Your Skills </>,
              text: "What better way to show off your skills than playing Play-to-Earn NFT games? You can gain recognition as you progress in the game and make your mark on the gaming world.",
              appclass: "app",
              addclass: "app05",
            },
            {
              title: <> Make Connections </>,
              text: (
                <>
                  Play-to-Earn NFT games are a great way to connect with other
                  players and enjoy the gaming experience together. Connecting
                  with others helps build an online community and fosters
                  collaboration and friendship.
                </>
              ),
              appclass: "app1",
              addclass: "app06",
            },
            {
              title: <> Compete for Rewards </>,
              text: (
                <>
                  Competing in these games allows you to compete for rewards or
                  tokens, which can be used to purchase additional items,
                  upgrade your character, and even purchase real-world products!
                  With the challenge of competition comes great rewards! With
                  Play-to-Earn NFT games, you can truly have it all!
                </>
              ),
              appclass: "app2",
              addclass: "app07",
            },
          ]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <LpChoose transform="transform" />
      <ServiceSolutions
        addClass="gameNft"
        subTitle="We'll Make Your NFT Game Dreams A Reality!"
        title="Be at the Forefront of Blockchain Technology and Utilize NFT Games for Big Wins"
        text="With our games, users have the power to create their own custom story and journey through the world of NFTs. To cut a long story short, we strive to marry our artistic vision with the latest technologies, allowing us to create stunning visuals and immersive experiences while maintaining excellent performance on all platforms."
        Solution={Solution}
      />
      <ServiceGenre
        addClass="gameNft"
        subTitle="Services"
        title={
          <>
            Unstoppable Fun: <br /> NFT Game Development Services
          </>
        }
        sections={[
          {
            title: <> NFT Game <br /> Concept Design </>,
            text: "We specialize in crafting engaging and entertaining NFT experiences through our unique approach to concept design and game mechanics. BitsWits is simply bridging the gap between concept and reality.",
            gameicon: gameicon1,
          },
          {
            title: <> Play-to-Earn <br /> Game Development </>,
            text: "With our Play-to-Earn NFT games, you can create a unique game that rewards players with valuable digital tokens as they progress through levels or missions. It’s a great way to monetize your gaming experience and earn money while playing video games.",
            gameicon: gameicon2,
          },
          {
            title: <> Custom NFT <br /> Game Development </>,
            text: "We use our cutting-edge technology and industry-leading expertise to create high-quality non-fungible tokens that allow you to offer exclusive gaming experiences like no other. We specialize in building custom NFT games that are fun and engaging and provide a truly memorable gaming experience.",
            gameicon: gameicon3,
          },
        ]}
      />
      <Capabilitiesnft />
      <ServiceEngage
        addClass="gameNft"
        subTitle="Hire Developers"
        title={
          <>
            Ready to Unleash Your NFT Gaming <br /> Potential? Choose BitsWits!
          </>
        }
        main={main}
        heading1="Wide Range Of Expertise"
        text1="We have a wide range of expertise in developing NFT games, from simple mini-games to complex simulations. Our team is well-versed in developing games with an innovative edge and providing cost-effective solutions to meet your project goals."
        engIcon1={engIcon1}
        heading2="Custom/Adaptable Solutions"
        text2="We understand that no two NFT projects are the same. Our team is flexible enough to adapt our solutions to meet the unique requirements of your project. We deeply understand different game engines, platforms, and tools to ensure that your NFT game is designed to bring the best outcomes."
        engIcon2={engIcon2}
        heading3="Eye On The Latest"
        text3="We use the latest technologies, tools, and game development platforms to give our clients the best gaming experience. We also keep up with the latest trends in NFT gaming and use cutting-edge technologies to develop visually appealing, interactive, and immersive games."
        engIcon3={engIcon3}
        heading4="Security Measures"
        text4="They use enterprise-level technologies like encryption, authentication mechanisms, and authorization protocols to ensure that each game is safeguarded against data theft and malicious attacks. We also provide a secure infrastructure for the storage and secure delivery of digital assets."
        engIcon4={engIcon4}
        css={styles.marginTop}
        paddingTop={styles.paddingTop}
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
      <Justbuildit />
      <Globallp6 paddingTop={style.paddingTop} />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={
          [
            {
              question: "What is an NFT game?",
              answer:
                (<> An NFT game is a type of video game where in-game assets, characters, or items are represented as unique, indivisible tokens on a blockchain. These tokens, known as NFTs, have verifiable ownership, rarity, and scarcity, allowing players to have true ownership of their in-game items. </>),
            },
            {
              question: "How do NFTs work in games?",
              answer:
                (<> In NFT games, specific in-game assets or items are represented as unique tokens on a blockchain. Each NFT has a distinct identifier and ownership record stored on the blockchain, which verifies its authenticity and scarcity. </>),
            },
            {
              question: "What is the benefit of using NFTs in game development?",
              answer:
                (<> NFTs enable true ownership of in-game assets, allowing players to buy, sell, and trade items with verifiable scarcity. This can create new revenue streams for game developers and provide players with a sense of ownership and investment in the game. </>),
            },
            {
              question: "Which blockchain platforms are commonly used for NFT game development?",
              answer:
                (<> Ethereum is one of the most popular blockchain platforms for NFTs due to its widespread adoption and support for smart contracts. Other platforms like Binance Smart Chain, Flow, and Polygon (formerly Matic) are also gaining traction in the NFT space. </>),
            },
            {
              question: "How do players interact with NFTs in a game?",
              answer:
                (<> Players interact with NFTs through digital wallets that support the blockchain on which the NFTs are created (e.g., Ethereum wallet for Ethereum-based NFTs). They can buy, sell, trade, and showcase their NFTs within the game ecosystem. </>),
            },
            {
              question: "What are some common use cases for NFTs in games?",
              answer:
                (<> Common use cases for NFTs in games include:Unique in-game assets like characters, skins, weapons, and accessories.<br /><br />
                  Land ownership and virtual real estate in virtual worlds or metaverses.<br /><br />
                  Collectible card games where each card is represented as an NFT.<br /><br />
                  Player-created content, such as artwork or levels, that can be tokenized. </>),
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
            "name": "NFT Game Development Company",
            "url": " https://www.bitswits.co/nft-game-development",
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
            "url": " https://www.bitswits.co/nft-game-development",
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
            "name": "NFT Game Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.c8607501.png&w=1080&q=75",
            "url": "https://www.bitswits.co/nft-game-development",
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
            "name": "NFT Game Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.c8607501.png&w=1080&q=75",
            "description": "BitsWits specializes in creating NFT games using smart contracts on Ethereum, EOS, Tron, and Cardano. Our team spends countless hours crafting unique storylines, artwork, and game mechanics that bring the world of NFTs to life.",
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
