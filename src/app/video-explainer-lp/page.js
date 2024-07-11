"use client"
import React from "react";
//components 
import Banner from "@/src/components/video-explainer/Banner/Banner";
import Partner from "@/src/components/video-explainer/Partner/Partner";
import DigitalBranding from "@/src/components/video-explainer/DigitalBranding/DigitalBranding";
import Portfolio from "@/src/components/video-explainer/Portfolio/Portfolio";
import SmallBanner from "@/src/components/video-explainer/SmallBanner/SmallBanner";
import ExplainerType from "@/src/components/video-explainer/ExplainerType/ExplainerType";
import Packages from "@/src/components/video-explainer/Packages/Packages";
import Static from "@/src/components/video-explainer/Static/Static";
import Work from "@/src/components/video-explainer/Work/Work";
import Faqs from "@/src/components/video-explainer/Faqs/Faqs";
import Client from "@/src/components/video-explainer/Client/Client";

export default function page() {
  //===== FAQS =====//
  const lists = [
    {
      item1: "Understanding your business and marketing objectives",
      item1: "Story and script development",
      item1: "Storyboard",
      item1: "Voiceover",
      item1: "Illustration",
      item1: "Animation",
      item1: "Delivery/publication",
    }
  ]
  const accordionData = [
    {
      question: 'What Is The Cost Of Tech Video Production?',
      answer: "For our customers, we create meaningful and entertaining videos at Explain Art Animation. The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promote your services.Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.",
      lists: lists,
    },
    {
      question: 'What Is The BitsWits Pro’s Video Delivery Timeframe?',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
    },
    {
      question: 'What Kind Of Videos BitsWits Pro Provides With Tech Video Production Services?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    },
    {
      question: 'What Kind Of Videos BitsWits Pro Provides With Tech Video Production Services?',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  return (
    <>
      <Banner />
      <Partner />
      <DigitalBranding />
      <Portfolio />
      <SmallBanner />
      <ExplainerType />
      <Packages />
      <Static />
      <Work />
      <Faqs content={faqs} />
      <SmallBanner />
      <Client />
    </>
  );
}
