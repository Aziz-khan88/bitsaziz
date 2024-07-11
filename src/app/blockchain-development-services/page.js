"use client"
import Script from "next/script";
import React, { useEffect, useState } from "react";
// Components
import Banner from "../../components/new-blockchain-page-fy/BlockchainBanner";
import Provideservices from "../../components/new-blockchain-page-fy/Provideservices";
import Intelligence from "../../components/new-blockchain-page-fy/Intelligence";
import SmartContract from "../../components/new-blockchain-page-fy/SmartContract";
import CustomBlockchainSolutions from "../../components/new-blockchain-page-fy/CustomBlockchainSolutions";
import Hand from "../../components/new-blockchain-page-fy/Hand";
import Nftservices from "../../components/new-blockchain-page-fy/Nftservices";
import Technology from "../../components/new-blockchain-page-fy/Technology";
import Justbuildit from "../../components/Justbuildit";
import Globallplp6 from "../../components/Globallplp6";
import Formnewlp from "../../components/Formnewlp";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm from "../../components/LpFormprops";
import Nothing from "../../components/Nothing";
import People from "../../components/People";
import Partnerships from "../../components/Partnerships";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
// Images
import BannerImage from "/public/blockchainfynew/banner.png";
import bestgloba11 from "/public/servnew/1.png";
import bestgloba12 from "/public/servnew/2.png";
import bestgloba13 from "/public/servnew/3.png";
import mbestgloba11 from "/public/moniter/1.png";
import mbestgloba12 from "/public/moniter/2.png";
import mbestgloba13 from "/public/moniter/3.png";
import mbestgloba14 from "/public/moniter/4.png";
import mbestgloba15 from "/public/moniter/5.png";
import mbestgloba16 from "/public/moniter/6.png";

export default function blockchaindevelopmentservices() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Banner
          assignClass="awardpost"
          subtitle="Our Award-Winning"
          title={<> Blockchain Development Services </>}
          text={
            <>
              Bitswits is a leading development company that can help you hit the
              market with <br /> a newly developed Blockchain solution or revamp
              your existing systems.
            </>
          }
          BannerImage={BannerImage}
        />
        <People People="people" />
        <HomeBannerSliderlp />
        <LpForm
          addresClass="iosclass"
          heading={`At Bitswits, we're pioneers in blockchain innovation. Our dedicated team crafts cutting-edge solutions that redefine the digital landscape. From smart contracts to decentralized apps, we turn your vision into a global powerhouse. Join us for a transformative journey where technology meets excellence, and your success in the blockchain realm is our priority.`}
        />
        <Nothing Nothing="nothingLp6" />
        <Provideservices
          assignClass="provideserv"
          title={
            <h2 className="font_30 fontsfheavy newfycolr">
              Blockchain Development Services
            </h2>
          }
          bigtitle={
            <h2 className="newchoose letterspace_1 font-bold white">
              We Provide Blockchain Development Services
            </h2>
          }
          para={
            <p className="font_17 white fontsfregular pt-2 pb-2">
              Our software developers are highly proficient in building blockchain
              technologies from scratch and customizing existing <br /> blockchain
              solutions through software integrations, functionality
              modifications, and feature implementations.
            </p>
          }
          title2={
            <h2 className="font_30 font-bold newfycolr">
              Blockchain Technology Development
            </h2>
          }
          para2={
            <p className="font_15 linehight_1 white fontsfregular pt-2">
              Bitswits is a leading development company that can help you hit the
              market with a newly developed Blockchain solution or revamp your
              existing systems. Our Blockchain Development promotes business
              growth while transforming companies and establishing improved
              business models with custom cryptocurrencies, consensus algorithms,
              individual nodes, and architectures.
            </p>
          }
          sec={[
            {
              img1: bestgloba11,
              titl3: "Blockchain Security",
              para4:
                "We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.",
            },
            {
              img1: bestgloba12,
              titl3: "Public & Private Blockchain",
              para4:
                "We develop customized and protected private blockchain for businesses that process hundreds or thousands of transactions per second, as well as open, decentralized public blockchain that grants public access to the network.",
            },
            {
              img1: bestgloba13,
              titl3: "Decentralized Applications (Dapps)",
              para4:
                "We develop custom decentralized applications and integrate them into existing enterprise systems where businesses can leverage a protected, secure environment for collaboration and diverse business transactions.",
            },
          ]}
          video={
            <video
              autoPlay
              loop
              muted
              src="https://player.vimeo.com/progressive_redirect/playback/961549483/rendition/360p/file.mp4?loc=external&log_user=0&signature=87e860d23e4a973e4c9d92cc2f9134d2d533a7ef692c26fadfed1315e8bf2f58"
              className="w-100 h-100"
            ></video>
          }
        />
        <SmartContract
          assignClass="provideserv"
          title={
            <h2 className="font_30 fontsfheavy newfycolr center">
              Blockchain Development Services
            </h2>
          }
          bigtitle={
            <h2 className="newchoose letterspace_1 font-bold white center">
              Custom AI Blockchain Development Services
            </h2>
          }
          para={
            <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">
              Our developers can combine Artificial Intelligence (AI) and
              Blockchain to more effectively secure data, establish ownership,
              optimize <br /> smart contracts, and track goods. We integrate AI
              technology into Blockchain software to develop transformative
              solutions across <br /> various industries. Our AI Blockchain
              solutions provide advanced functionality and optimal benefits.
            </p>
          }
          sec={[
            {
              img1: mbestgloba11,
              title3: "Data Analysis",
              para4:
                "Our experts can develop Blockchain software with AI algorithms that analyze large volumes of data recorded on the Blockchain to gather insights, patterns, and trends. AI can identify anomalies and predict future behavior using machine learning and data analytics strategies.",
            },
            {
              img1: mbestgloba12,
              title3: "Natural Language Processing",
              para4:
                "Our AI and Blockchain experts can incorporate natural language processing capabilities into your AI-powered Blockchain solution to enhance smart contracts to have the ability to understand human-readable language and enable greater accessibility of Blockchain technology. This streamlines business processes and reduces the need for manual intervention.",
            },
            {
              img1: mbestgloba13,
              title3: "Smart Contract Optimization",
              para4:
                "Our Blockchain development using AI includes smart contract optimization, which automates the process of contract creation, validation, and enforcement. AI analyzes contract templates, historical data, and legal regulations to generate more efficient and smart contracts. It improves contract performance, reduces errors, and enhances contract management processes.",
            },
            {
              img1: mbestgloba14,
              title3: "Security and Fraud Detection",
              para4: `We develop AI-powered security solutions to enhance the security of Blockchain networks. It can monitor network activity, detect suspicious behavior, and identify potential security threats or attacks. AI can assist in detecting fraudulent transactions, preventing unauthorized access, and ensuring the Blockchain network's integrity.
            `,
            },
            {
              img1: mbestgloba15,
              title3: "Privacy and Confidentiality",
              para4:
                "We leverage AI techniques like federated learning, which can be applied to protect the privacy of data stored on the blockchain. AI algorithms enable computations on encrypted data, allowing privacy-preserving analysis while maintaining data confidentiality.",
            },
            {
              img1: mbestgloba16,
              title3: "AI-Enhanced Consensus Mechanisms",
              para4:
                "Our experts leverage AI algorithms to optimize consensus mechanisms within Blockchain networks. Using machine learning, AI can adapt the consensus protocol based on network conditions, transaction patterns, or node behavior. This improves scalability, efficiency, and fault tolerance within the Blockchain network.",
            },
          ]}
        />
        <Intelligence assignClass="provideserv" />
        <Hand assignClass="provideserv" />
        <CustomBlockchainSolutions assignClass="provideserv" />
        <div className="bgtext">
          <Nftservices assignClass="provideserv" />
        </div>
        <Technology addresClass="tech" />
        <Justbuildit assignClass="justforpop" />
        <Globallplp6 bannerClass="newclassglobe" />
        <Partnerships />
        <Formnewlp />
        <ServicesFaqs
          faqsData={[
            {
              question: "What is Mobile Application Development?",
              answer: (
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </>
              ),
            },
            {
              question:
                "Does Bitswits Offers Hybrid and Native Application Development?",
              answer: (
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </>
              ),
            },
            {
              question:
                "Why Choose Bitswits as a Mobile Application Development Company?",
              answer: (
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </>
              ),
            },
            {
              question: "Is there any customer support available?",
              answer: (
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </>
              ),
            },
            {
              question: "How to choose a mobile application development company?",
              answer: (
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </>
              ),
            },
            {
              question: "What industries does BitsWits cater do?",
              answer: (
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </>
              ),
            },
          ]}
        />
        <HomeLocation />

      </div>
      <Script id="websiteSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Blockchain Development Services",
            "url": "https://www.bitswits.co/blockchain-development-services",
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
            "url": "https://www.bitswits.co/blockchain-development-services",
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
            "name": "Blockchain Development Services",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.27d4835a.png&w=828&q=75",
            "url": "https://www.bitswits.co/blockchain-development-services",
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
            "name": "Augmented Reality Apps Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAugmentebanner.8f681373.png&w=750&q=75",
            "description": "BitsWits is your ultimate destination for Augmented Reality app development. Our developers deliver dynamic AR experiences that set your business apart from the rest.",
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
