"use client"
import Script from "next/script";
import React, { useState, useEffect } from "react";
// css //
import styleThree from "@/styles/Globallp.module.css";
//components
import ServicesBanner from "../../components/ServicesBanner";
import ServicesAdvantage from "../../components/ServicesAdvantage";
import ServicesMaintain from "../../components/ServicesMaintain";
import ServiceSolutions from "../../components/ServiceSolutions";
import GameCapabilities from "../../components/GameCapabilities";
import ServiceEngage from "../../components/ServiceEngage";
import Newsuccess from "../../components/NewMblSuccess";
import GameTechnologies from "../../components/GameTechnologies";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import Justbuildit from "../../components/Justbuildit";
import Globallp6 from "../../components/GlobalLp6";
import Partnerships from "../../components/Partnerships";
import HomeBannerSlider from "../../components/HomeBannerSlider";
import LpChoose from "../../components/LpChoose";
import LpForm from "../../components/LpForm";
import Nothing from "../../components/Nothing";
import People from "../../components/People";
import Formnewlp from "../../components/Formnewlp";
import ServicesMaintainmobile from "../../components/ServicesMaintainmobile";
//images
import BannerImage from "/public/blockchaindevelopment/images/blockchainbanner.png";
import AdvantageOne from "/public/blockchaindevelopment/images/advantage1.png";
import Solution from "/public/blockchaindevelopment/images/solution.png";
import main from "/public/blockchaindevelopment/images/engagecenter.png";
import engIcon1 from "/public/blockchaindevelopment/images/engage1.png";
import engIcon2 from "/public/blockchaindevelopment/images/engage2.png";
import engIcon3 from "/public/blockchaindevelopment/images/engage3.png";
import engIcon4 from "/public/blockchaindevelopment/images/engage4.png";
import customios from "/public/images/blockchainappdevelopment/ethereumdappgamedevelopment.png";
import iphoneapp from "/public/images/blockchainappdevelopment/polygongamedevelopment.png";
import applewatch from "/public/images/blockchainappdevelopment/solanablockchaindevelopment.png";
import appletvappdevelopment from "/public/images/blockchainappdevelopment/eosdappgamedevelopment.png";
import iphoneappdesigning from "/public/images/blockchainappdevelopment/metaverseblockchaingamedevelopment.png";
import hybridiphone from "/public/images/blockchainappdevelopment/nftblockchaingamedevelopment.png";
import react from "/public/images/blockchainappdevelopment/trongamedevelopment.png";
import next from "/public/images/blockchainappdevelopment/bscgamedevelopment.png";
import reactnative from "/public/images/blockchainappdevelopment/cryptogamblinggames.png";
import flutter from "/public/images/blockchainappdevelopment/ingameassettokencreation.png";
import python from "/public/images/blockchainappdevelopment/smartcontractdappgamedevelopment.png";

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
        subtitle: "Our Services Are Where Innovation Meets Play",
        title1: "Blockchain Gaming Engineering Services",
        text: `From creating multiplayer games to providing secure in-game asset exchange options, BitsWits leverages blockchain technology for game development.
        Our services include creating next-generation games using the latest technology and tools, such as Unity 3D engine for VR/AR gaming experiences,
        Augmented Reality (AR) support for games, low-latency gameplay features, HoloLens integration, and blockchain-backed matchmaking.`,
      },
      serdata: [
        {
          title: "Ethereum Dapp Game Development",
          text: "BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Polygon Game Development",
          text: `We specialize in Polygon game development and create detailed
          game environments and characters with smooth animation
          capabilities. From design and coding to animation, we create
          engaging games that push the boundaries of creativity.`,
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Solana Blockchain Development",
          text: `Solana Blockchain game development is all the rage right now,
          and BitsWits is leading the charge. We specialize in creating
          powerful, high-volume games with a wide range of features – from
          fast-paced action to deep strategic play.`,
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "EOS Dapp Game Development",
          text: "BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform. Get in touch to create engaging, user-friendly and intuitive dapps with unique features that help you stand out from the competition.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Metaverse Blockchain Game Development",
          text: "Using blockchain and cutting-edge technology, we deploy metaverse projects with features such as distributed storage and processing, zero-knowledge transactions, and non-fungible tokens (NFTs). Build next-generation titles with us!",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "NFT Blockchain Game Development",
          text: "Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "TRON Game Development",
          text: `Boasting some of the best 3D graphics ever seen in a game, our
            TRON games let you immerse yourself in a virtual world full of
            adventure, excitement, and action. With realistic animations and
            stunning sound effects, you'll feel like you're part of the
            action.`,
          appclass: "app5",
          imgservice: react,
        },
        {
          title: "BSC Game Development",
          text: `BSC Game Development by BitsWits is a complete suite of game
            development tools designed for professionals and enthusiasts
            alike. With its powerful engine, integrated asset library,
            intuitive interface, and comprehensive visual toolsets,
            developers can quickly bring their ideas to life.`,
          appclass: "app5",
          imgservice: next,
        },
        {
          title: "Crypto Gambling Games",
          text: `Our team of experts is highly knowledgeable about blockchain
            technology and its applications in gaming, allowing us to
            develop cutting-edge, secure online casinos and betting
            platforms with an unparalleled level of safety, fairness, and
            security.`,
          appclass: "app5",
          imgservice: reactnative,
        },
        {
          title: "In-Game Asset & Token Creation",
          text: "BitsWits specializes in providing bespoke in-game asset and token creation services. We offer various services tailored to suit your specific requirements: from creating 3D or 2D assets to programming custom tokenization systems and blockchain integration.",
          appclass: "app5",
          imgservice: flutter,
        },
        {
          title: "Smart Contract Dapp Game Development",
          text: "BitsWits provides comprehensive smart-contract solutions for games that operate on blockchain networks. Contact us to bring your notion of a modern and decentralized gaming experience into reality.",
          appclass: "app5",
          imgservice: python,
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
        assignClass="gameBlckChain"
        title={
          <>
            We Revolutionize The Way Digital <br /> Games Are Designed And
            Played!!!
          </>
        }
        text={
          <>
            BitsWits is an up-and-coming blockchain game development company
            that produces cutting-edge blockchain games <br /> for the global
            gaming market. We create next-generation games based on distributed
            ledger technology (DLT).
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
          <>
            Advantages Of <br /> Blockchain For Gaming
          </>
        }
        title1="Security"
        content1={
          <>
            Blockchain technology offers game developers an unprecedented level
            of security, ensuring that users' accounts, valuable in-game items,
            and progress remain safe from hackers.
          </>
        }
        title2="Smart Contracts"
        content2="Through smart contracts, game developers can create automated, self-executing agreements that open up an entirely new level of flexibility when creating games."
        title3="Transparency"
        content3={
          <>
            Players can keep track of the entire game's transactions and
            activities, authorizing greater trust and transparency in game
            development. This type of data integrity is beneficial for
            competitive games where players may be incentivized to succeed.
          </>
        }
        title4="Improved Asset Management"
        content4="Blockchain technology offers improved asset management for developers, allowing them to track and manage in-game items more accurately. This ensures players can quickly and easily access the items they need without any hassle."
        title5="Faster Transactions"
        content5="Blockchain technology allows for near-instantaneous payments between players without any additional fees or middlemen. This ensures the in-game economies are vibrant and healthy, allowing for a better gaming experience."
        title6="Enhanced Interoperability"
        content6={
          <>
            Blockchain technology finally enables the creation of more
            interoperable games, enabling players to exchange game assets and
            items across different platforms and devices, improving their gaming
            experience by eliminating the need to start from scratch each time
            they switch devices.
          </>
        }
        AdvantageOne={AdvantageOne}
      />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="gameBlckChain"
          subtitle="Our Services Are Where Innovation Meets Play"
          title4={<> Blockchain Gaming Engineering Services </>}
          text={
            <>

              From creating multiplayer games to providing secure in-game asset
              exchange options, BitsWits leverages blockchain technology for
              game development.
              <br /> Our services include creating next-generation games using
              the latest technology and tools, such as Unity 3D engine for VR/AR
              gaming experiences,
              <br /> Augmented Reality (AR) support for games, low-latency
              gameplay features, HoloLens integration, and blockchain-backed
              matchmaking.
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>

                  Ethereum Dapp <br /> Game Development
                </>
              ),
              text: "BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement.",
              appclass: "app",
            },
            {
              title: (
                <>

                  Polygon Game <br /> Development
                </>
              ),
              text: (
                <>

                  We specialize in Polygon game development and create detailed
                  game environments and characters with smooth animation
                  capabilities. From design and coding to animation, we create
                  engaging games that push the boundaries of creativity.
                </>
              ),
              appclass: "app1",
            },
            {
              title: (
                <>

                  Solana Blockchain <br /> Development
                </>
              ),
              text: (
                <>

                  Solana Blockchain game development is all the rage right now,
                  and BitsWits is leading the charge. We specialize in creating
                  powerful, high-volume games with a wide range of features –
                  from fast-paced action to deep strategic play.
                </>
              ),
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "EOS Dapp Game Development",
              text: "BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform. Get in touch to create engaging, user-friendly and intuitive dapps with unique features that help you stand out from the competition.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "Metaverse Blockchain Game Development",
              text: "Using blockchain and cutting-edge technology, we deploy metaverse projects with features such as distributed storage and processing, zero-knowledge transactions, and non-fungible tokens (NFTs). Build next-generation titles with us!",
              appclass: "app4",
            },
            {
              title: "NFT Blockchain Game Development",
              text: "Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference.",
              appclass: "app5",
            },
          ]}
          appContent4={[]}
          appContent5={[]}
          appContent6={[
            {
              title: <> TRON Game Development </>,
              text: (
                <>

                  Boasting some of the best 3D graphics ever seen in a game, our
                  TRON games let you immerse yourself in a virtual world full of
                  adventure, excitement, and action. With realistic animations
                  and stunning sound effects, you'll feel like you're part of
                  the action.
                </>
              ),
              appclass: "app",
              addclass: "app05",
            },
            {
              title: <> BSC Game Development </>,
              text: (
                <>

                  BSC Game Development by BitsWits is a complete suite of game
                  development tools designed for professionals and enthusiasts
                  alike. With its powerful engine, integrated asset library,
                  intuitive interface, and comprehensive visual toolsets,
                  developers can quickly bring their ideas to life.
                </>
              ),
              appclass: "app1",
              addclass: "app06",
            },
            {
              title: <> Crypto Gambling Games </>,
              text: (
                <>

                  Our team of experts is highly knowledgeable about blockchain
                  technology and its applications in gaming, allowing us to
                  develop cutting-edge, secure online casinos and betting
                  platforms with an unparalleled level of safety, fairness, and
                  security.
                </>
              ),
              appclass: "app2",
              addclass: "app07",
            },
          ]}
          appContent7={[
            {
              title: "In-Game Asset & Token Creation",
              text: "BitsWits specializes in providing bespoke in-game asset and token creation services. We offer various services tailored to suit your specific requirements: from creating 3D or 2D assets to programming custom tokenization systems and blockchain integration.",
              appclass: "app4",
              addclass: "app08",
            },
            {
              title: "Smart Contract Dapp Game Development",
              text: "BitsWits provides comprehensive smart-contract solutions for games that operate on blockchain networks. Contact us to bring your notion of a modern and decentralized gaming experience into reality.",
              appclass: "app5",
              addclass: "app09",
            },
          ]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <LpChoose transform="transform" />
      <ServiceSolutions
        addClass="gameBlckChain"
        subTitle="Solutions"
        title="Take Your Gaming Experience to the Blockchain!"
        text="BitsWits is at the cutting edge of blockchain game development, offering a suite of products to help businesses create fully featured games with all the security and transparency benefits of distributed ledger technology."
        Solution={Solution}
      />
      <GameCapabilities />
      <ServiceEngage
        addClass="gameBlckChain"
        subTitle="Hire Top-Notch Blockchain Developers"
        title={
          <>
            Reason You Will Love Our Blockchain <br /> Game Development Company
          </>
        }
        main={main}
        heading1="Business Value-driven Solutions"
        text1="BitsWits offers multiple platform support for blockchain game development, meaning your game will reach a much wider audience."
        engIcon1={engIcon1}
        heading2="Agile Methodology"
        text2="With our agile development process, you can be sure that we will release your game quickly without compromising quality. You can be sure of the quality games with no glitches!"
        engIcon2={engIcon2}
        heading3="Smooth User Experience"
        text3="BitsWits understands that the success of any blockchain game depends on its ability to provide secure transactions in a safe environment. Hence, we take extra care to ensure that our solutions are secure and reliable, ensuring a smooth user experience."
        engIcon3={engIcon3}
        heading4="Multi-platforms Game Development"
        text4="Our team of experienced developers has the capacity to craft custom blockchain games for any platform—from mobile, desktop, console, and web to virtual reality."
        engIcon4={engIcon4}
      />
      <Newsuccess
        assignClass="spacing2d"
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
      <GameTechnologies />
      <Justbuildit />
      <Globallp6 paddingTop={styleThree.paddingGlobal} />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={
          [
            {
              question: "What is blockchain game development?",
              answer:
                (<> Blockchain game development involves creating video games that leverage blockchain technology for various purposes, including asset ownership, secure transactions, and provably fair gameplay. </>),
            },
            {
              question: "How does blockchain technology work in games?",
              answer:
                (<> In games, blockchain technology is used to create, manage, and verify digital assets (such as in-game items, characters, or currencies) as non-fungible tokens (NFTs) or other types of blockchain-based assets. These assets are stored on a decentralized ledger, providing players with true ownership and transparency. </>),
            },
            {
              question: "What are the benefits of using blockchain in game development?",
              answer:
                (<> Using blockchain in game development offers benefits such as:True ownership of in-game assets for players.<br /><br />
                  Immutable ownership records and transparency.<br /><br />
                  Interoperability, allowing assets to be used across different games or platforms.<br /><br />
                  Enabling player-driven economies and marketplaces. </>),
            },
            {
              question: "Which blockchain platforms are commonly used for blockchain game development?",
              answer:
                (<> Ethereum is one of the most widely used blockchain platforms for creating blockchain-based games. Other platforms like Binance Smart Chain, Flow, and Polygon (formerly Matic) are also gaining popularity in the blockchain gaming space. </>),
            },
            {
              question: "What is the role of smart contracts in blockchain game development?",
              answer:
                (<> Smart contracts are self-executing contracts with predefined rules and conditions written in code. In blockchain games, smart contracts handle functions like creating, transferring, and verifying ownership of in-game assets, as well as managing in-game transactions. </>),
            },
            {
              question: "How can players interact with blockchain-based assets in a game?",
              answer:
                (<> Players interact with blockchain-based assets through digital wallets that support the blockchain on which the assets are created (e.g., Ethereum wallet for Ethereum-based assets). They can buy, sell, trade, and use these assets within the game ecosystem. </>),
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
            "name": "Blockchain Games Development Company",
            "url": "https://www.bitswits.co/blockchain-game-development",
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
            "url": "https://www.bitswits.co/blockchain-game-development ",
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
          "name": "Blockchain Games Development Company",
          "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblockchainbanner.d2e8a13c.png&w=1080&q=75",
          "url": "https://www.bitswits.co/blockchain-game-development",
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
            "name": "Blockchain Games Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblockchainbanner.d2e8a13c.png&w=1080&q=75",
            "description": "BitsWits is an up-and-coming blockchain game development company that produces cutting-edge blockchain games for the global gaming market. We create next-generation games based on distributed ledger technology (DLT).",
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
