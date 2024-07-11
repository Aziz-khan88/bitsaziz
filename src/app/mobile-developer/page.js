"use client"
import React, { useState, useEffect } from "react";
//components
import Banner from "../../components/HireBanner";
import NewAddress from "../../components/NewAddress";
import HireLogoSlider from "../../components/HireLogoSlider";
import NewHomeAbout from "../../components/NewHomePageAbout";
import HireServices from "../../components/HireServices";
import HireBenifitsMbl from "../../components/HireBenifitsMbl";
import HireTiming from "../../components/HireTiming";
import Technologieswe from "../../components/Technologieswe";
import Homenextproject from "../../components/Homenextproject";
import Faqs from "../../components/NewhomeFaqs";
import HomeLocation from "../../components/HomeLocation";
//images
import banImg from "/public/images/hire-page/mobile/mbl.png";

export default function MobileDeveloper() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

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
      <Banner
        subtitle={<> Hire </>}
        title={<> Hire Mobile App Developer </>}
        para={
          <>
            We deliver great results, on time and on budget. Contact usto start
            talking about your project today!
          </>
        }
        banImg={banImg}
        bannerClass="mbl"
      />
      <NewAddress />
      <HireLogoSlider />
      <NewHomeAbout addClass="mblHire" />
      <HireServices />
      <HireBenifitsMbl />
      <HireTiming />
      <Technologieswe />
      <Homenextproject title="Brace yourself for an App-venture!" />
      <Faqs />
      <HomeLocation />

    </>
  );
}
