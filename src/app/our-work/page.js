"use client"

import React, { useState, useEffect } from "react";
//components
import WorkBanner from "../../components/WorkBanner";
import WorkBody from "../../components/WorkBody";
import NewHomeGlobal from "../../components/NewHomeGlobal";
import Capabilities from "../../components/Capabilities";
import NewHomeSlider from "../../components/NewHomeSlider";
import Technologieswe from "../../components/Technologieswe";
import Homenextproject from "../../components/Homenextproject";
import Faqs from "../../components/NewhomeFaqs";
import HomeLocation from "../../components/HomeLocation";

export default function OurWork() {

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
      <WorkBanner />
      <WorkBody />
      <NewHomeGlobal />
      <Capabilities />
      <NewHomeSlider />
      <Technologieswe />
      <Homenextproject title="Brace yourself for an App-venture!" />
      <Faqs />
      <HomeLocation />
    </>
  );
}
