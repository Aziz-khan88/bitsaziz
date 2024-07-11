"use client"

import React, { useEffect, useState } from "react";
//
import NewBannerabout from "../../components/NewBannerabout";
import Nothing from "../../components/Nothing";
import AboutIntro from "../../components/AboutIntro";
import AboutExpertapp from "../../components/AboutExpertapp";
import ProjectProcess from "../../components/ProjectProcessLp6";
import Homenextproject from "../../components/Homenextproject";
import HomeLocation from "../../components/HomeLocation";

export default function Home() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <NewBannerabout />
      <AboutIntro />
      <Nothing Nothing="nothingLphomefy" />
      <AboutExpertapp expertapp="expertapp" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our iOS App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
                streamlined process for app development is <br /> designed to be
                transparent and collaborative, ensuring your vision comes to life
                exactly as you imagined."
      />
      <Homenextproject title="Brace yourself for an App-venture!" />
      <HomeLocation />
    </>
  );
}
