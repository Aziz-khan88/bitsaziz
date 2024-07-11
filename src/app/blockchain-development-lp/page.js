"use client"

import { useEffect, useState } from "react";
import styles from "@/styles/blockchain/Home.module.css";
//
import Banners from "../../components/blockchain/Banners";
import Logoslide from "../../components/blockchain/LogoSlide";
import LeftContent from "../../components/blockchain/LeftContent";
import Blockchain from "../../components/blockchain/Blockchain";
import Revolution from "../../components/blockchain/Revolution";
import NextGen from "../../components/blockchain/NextGen";
import Standing from "../../components/blockchain/Standing";
import Expertise from "../../components/blockchain/Expertise";
import Process from "../../components/blockchain/Process";
import WhyChooseUs from "../../components/blockchain/WhyChooseUs";
import Contact from "../../components/Contact";
//
import typeofbooks from "/public/blockchain/images/logo-1.png";

export default function Home() {
  const text = (
    <span>
      Join hands with the best blockchain app development company to build
      custom blockchain apps powered by high-end technologies.
    </span>
  );
  const subtext = (
    <span>
      Empower your business with scalable and secure blockchain solutions to
      introduce high levels of transparency, data immutability and
      decentralization into your business processes. Lay a strong foundation for
      your business that targets growth and excellence with our blockchain
      software development company. We are here to help startups and enterprises
      create decentralized business ecosystems.
    </span>
  );
  const title = (
    <span className="">
      <span className="d-block f18">
        Transform <span className="f18 grdiant">Your Business</span> Idea Into
        Reality with
      </span>
      <span className="newchoose fw700 grdiant">
        <br></br> Blockchain Software Development Company
      </span>
    </span>
  );
  const hireTile = (
    <span className="f18 fw700">
      Hire <span className="f18 fw700 grdiant">Blockchain</span> Development
    </span>
  );
  const hireSubTile = (
    <span className="newchoose fw700"> Firm To Upscale Your Business </span>
  );
  const revTile11 = (
    <span className="f18 fw700">
      Empower <span className="f18 fw700 grdiant">Your Business</span> with
    </span>
  );
  const revSubTile = (
    <span className="newchoose fw700 grdiant">
      Revolutionary Blockchain App Development Services
    </span>
  );
  const revpara = (
    <span>
      Hire blockchain developers from Blocktech Brew to build innovative dApp
      and smarter blockchain solutions to get an edge in the market. With
      business data integrity, transparent workflow, better business
      collaborations and automated business processes, our blockchain
      application development services will help you maximize your performance
      and profits.
    </span>
  );
  const NextTtitle1 = (
    <span className="f18 fw700">
      Empower <span className="f18 fw700 grdiant">Your Business</span> with
    </span>
  );
  const Nextsub = (
    <span className="newchoose fw700 grdiant">
      Next Generational Blockchain Solution
    </span>
  );
  const NextPara = (
    <span>
      Hire our blockchain app developers backed by years of experience in the
      web3 industry to transform your business.
    </span>
  );
  const NextTtitle2 = (
    <span className="newchoose fw700">
      Let’s Build <span className="grdiant">A Secure,</span> Transparent,
      <span className="">And</span> Decentralized
      <span className="grdiant">
        Future <br /> Together
      </span>
    </span>
  );
  const NextPara2 = (
    <span>
      Get in touch with our blockchain experts to discuss your project <br />{" "}
      requirements and get a free quote.
    </span>
  );
  const exTitle = (
    <span className="newchoose fw700">
      Our <span className="">Expertise </span> In{" "}
      <span className="grdiant">Blockchain Development</span> Platforms
    </span>
  );
  const exPara = (
    <span>
      Our in-depth knowledge and experience in major blockchain platforms and
      protocols empowers us to deliver best blockchain solutions and of standard
      quality.
    </span>
  );
  const whyTitle = (
    <span className="newchoose">
      Why <span className="grdiant">Choose</span> Blocktech Brew{" "}
      <span className="">As</span>{" "}
    </span>
  );
  const whySubTitle = (
    <span className="fw600">
      Your <span className="grdiant">Blockchain Development</span> Company
    </span>
  );
  const whyPara = (
    <span>
      Hire our blockchain app developers to explore the potential of blockchain
      in transforming your business infrastructure. Our team will help you build
      custom blockchain solutions and seamlessly integrate them into your
      business to enjoy the perks of decentralization. We are a blockchain app
      development company committed to building robust, functional and
      performing dApps which align with your customer preferences and your
      business goals. Whether you are a startup looking to build a new
      blockchain based product or an enterprise wishing to boost its efficiency,
      we offer end-to-end blockchain development services under one roof.
    </span>
  );
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <main className={styles.main}>
        <Banners />
        <Logoslide />
        <LeftContent
          title={title}
          text={text}
          subtext={subtext}
          number="1-844-400-0025"
          discuss="Hire Blockchain Developer"
          image={typeofbooks}
          whychooseclass="marketyourbook"
        />
        <Blockchain hireTile={hireTile} text={text} hireSubTile={hireSubTile} />
        <Revolution
          revTile1={revTile11}
          revSubTile1={revSubTile}
          revpara={revpara}
        />
        <NextGen
          nextTtitle1={NextTtitle1}
          nextsub={Nextsub}
          nextPara={NextPara}
          poster="true"
          poster1=""
        />
        <Standing />
        <NextGen
          nextTtitle1={NextTtitle2}
          nextPara={NextPara2}
          poster1="true"
          poster=""
        />
        <Expertise exTitle={exTitle} exPara={exPara} />
        <Process />
        <WhyChooseUs
          whyTitle={whyTitle}
          whySubTitle={whySubTitle}
          whyPara={whyPara}
        />
        <Contact newBg="newBgSpc" />
      </main>
    </>
  );
}
